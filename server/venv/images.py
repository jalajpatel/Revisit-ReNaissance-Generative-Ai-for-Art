from flask import Flask
from io import BytesIO
from flask import jsonify, request
from flask_cors import CORS
import PIL
from PIL import Image
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub
import matplotlib.pylab as plt
import json
import pickle

app = Flask(__name__)

# @app.route('/api', methods=['GET','POST'])
# def test():
#     print("hello")
#     return "here"
CORS(app)
@app.route('/image_request', methods=['GET','POST'])
def upload_file():
    d = {}
    print('backend')
    def tensor_to_image(tensor):
        tensor = tensor*255
        tensor = np.array(tensor, dtype=np.uint8)
        if np.ndim(tensor)>3:
            assert tensor.shape[0] == 1
            tensor = tensor[0]
        return PIL.Image.fromarray(tensor)
    def load_img(path_to_img):
        max_dim = 512
        img = tf.io.read_file(path_to_img)
        img = tf.image.decode_image(img, channels=3)
        img = tf.image.convert_image_dtype(img, tf.float32)

        shape = tf.cast(tf.shape(img)[:-1], tf.float32)
        long_dim = max(shape)
        scale = max_dim / long_dim

        new_shape = tf.cast(shape * scale, tf.int32)

        img = tf.image.resize(img, new_shape)
        img = img[tf.newaxis, :]
        return img
    
    try:
        file = request.files['file_from_react']
        filename = file.filename
        print(f'uploading file {filename}')
        painter = request.form['imageno']
        #painter = '1'
        img = Image.open(file)
        file_bytes = file.read()
        file_content = BytesIO(file_bytes).readlines()
        d['status'] = 1
        target = "C:/Users/admin/Desktop/btp/client/src/images/img.jpg"
        img.save(target)
        if painter == 'davinci':
            style_image_url = "../../client/src/images/monalisa3.jpg"
        elif painter == 'vangogh':
            style_image_url = "../../client/src/images/starrynight2.jpg"
        elif painter == 'munch':
            style_image_url = '../../client/src/images/scream.jpg'
        elif painter == 'vermeer':
            style_image_url = '../../client/src/images/girlwithapearlearing2.jpg'
        elif painter == 'hokusai':
            style_image_url = '../../client/src/images/tsunami2.jpg'
        elif painter == 'picasso':
            style_image_url = '../../client/src/images/girlwithamandolin2.jpg'
        elif painter == 'majnubhai':
            style_image_url = '../../client/src/images/donkeyonhorse.jpg'
        
        content_image = load_img(target)
        #print('couldnt upload webp')
        style_image = load_img(style_image_url)
        hub_handle = 'https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2'
        hub_module = hub.load(hub_handle)
        stylized_image = hub_module(tf.constant(content_image), tf.constant(style_image))[0]
        print('flag1')
        final_image = tensor_to_image(stylized_image)
        final_image.save('C:/Users/admin/Downloads/ml.jpg')

    except Exception as e:
        print(f'couldnt upload file {e}')
        d['status'] = 0
        d['cheap'] = 'yes'
    return jsonify(d)
    # return"hello"

@app.route('/poem_request', methods=['GET','POST'])
def upload_poem():
    d = {}
    print('backend_poem')
    try:
        maxlen = 40
        file = request.form['file_user_text']
        poet = request.form['poet']
        d['status'] = 1

        model = tf.keras.models.load_model('./models/'+poet+'.h5')
        
        with open('./models/'+poet+'_char_to_int.pkl', 'rb') as f:
            char_to_int = pickle.load(f)
        with open('./models/'+poet+'_chars.pkl', 'rb') as f:
            chars = pickle.load(f)
        print('flag1')
        def sample(preds, temperature=.36):
            preds = np.asarray(preds).astype('float64')
            preds = np.log(preds)/temperature
            exp_preds = np.exp(preds)
            preds = exp_preds/np.sum(exp_preds)
            probas = np.random.multinomial(1,preds,1)
            return np.argmax(probas)

        def generate_poem(input):
            temp = 0.36
            output_poem = ""
            input = input.rstrip()
            input = input.lower()
            output_poem += input
            if len(input) > maxlen:
                input = input[:maxlen]
            else:
                input += " est creatures we desire increase, that t"
                input = input[:maxlen]

            for i in range(525):
                sampled = np.zeros((1,maxlen,len(chars)))

                for j,char in enumerate(input):
                    sampled[0,j,char_to_int[char]] = 1
                
                preds = model.predict(sampled, verbose=0)[0]
                pred_idx = sample(preds, temperature=temp)
                next_char = chars[pred_idx]

                input += next_char
                input = input[1:]

                output_poem += next_char
            return output_poem
        generated_poem = generate_poem(file)
        print(generate_poem)
        d['poem'] = generated_poem


    except Exception as e:
        print(f'couldnt upload file {e}')
        d['status'] = 0
        d['cheap'] = 'yes'
    return jsonify(d)


if __name__ == "__main__":
    app.run(debug=True)