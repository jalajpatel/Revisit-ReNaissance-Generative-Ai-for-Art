import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/picasso.jpg';
import painting from '../images/girlwithamandolin.jpg'
import Footer from '../components/footer';

function Picasso(){
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    async function uploadFile(e){
        handleChange(e);
        const file = e.target.files[0];
        if(file != null){
            const data = new FormData();
            data.append('file_from_react',file);
            data.append('imageno',"picasso");

            let response = await fetch('http://localhost:5000/image_request',{
                method:'post',
                mode:"cors",
                body:data,
            });

            let res = await response.json();
            if (res.status !== 1){
                alert('Error uploading file');
            }
            else{
                console.log("ALL is fine");
                console.log(res.status);
                setFile1('find your image in the downloads');
            }
        }
    };
    

    return(
        <>
            <Navbar />
            <div className="painterpage">
                <div className='aboutpainter'>
                    {/* yaha pe painter ki image aur list of his achievements and facts (dono ko flex karke kar lena)*/}
                    <div className="imagewrapper">
                        <img src={painterimage} className="painting" alt='pablo picasso'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Pablo Picasso</h3>
                        <ul>
                            <li>
                                Picasso was a Spanish painter, sculptor, printmaker and ceramist who is often considered as the most influential artist of the 20th century.
                            </li>
                            <li>
                                He is also known for co-founding the <a href='https://en.wikipedia.org/wiki/Cubism'>Cubist</a> movement and the co-invention of <a href='https://en.wikipedia.org/wiki/Collage'>Collage</a>.                                
                            </li>
                            <li>
                                Much of his formal training in his formative years came from his father who was a teacher of fine arts himself. 
                            </li>
                            <li>
                                Picasso went through various phases characterised by the predominant use of a color in the paintings of that era. Such eras are the blue era, the rose era and so on. 
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    
                    <div className="paintinginfo">
                        <h3>Girl with a Mandolin</h3>
                        <ul>   
                            <li>
                                <i>Girl with a Mandolin</i> is a part of the collection of the Museum of Modern Art in New York.
                            </li>
                            <li>
                                It was painted in 1910 by Picasso in Paris within the Cubist movement.
                            </li>
                            <li>
                                The artwork is one of Picasso's early analytic cubist creations. 
                            </li>
                            <li>
                                The painting, as the name suggests, depicts a girl holding a mandolin. But the painting appears to be obstructed by the use of several cube and cube like structures overlaping the object of the painting itself.
                            </li>
                        </ul>
                    </div>
                    <div className="imagewrapper">
                        <img src={painting} className="painting" alt='girl with a mandolin' />
                    </div>
                </div>
                <div className="userinput">
                    <img src={file} className="userimage"/>
                    <input type='file' accept='image/*' onChange={uploadFile} className="userinput"/>
                    <div>{file1}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Picasso;