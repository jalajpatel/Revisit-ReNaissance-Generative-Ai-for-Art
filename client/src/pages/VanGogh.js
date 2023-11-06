import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/vangogh.jpg';
import painting from '../images/starrynight.jpg';
import Footer from '../components/footer';

function VanGogh(){
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
            data.append('imageno',"vangogh");

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
                        <img src={painterimage} className="painting" alt='vincent van gogh'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Vincent Van Gogh</h3>
                        <ul>
                            <li>
                                He was a Dutch painter who many people consider amongst the most influential figures in the history of Western Art.
                            </li>
                            <li>
                                Van Goghs life was characterised by depression, ill-health and solitude. Only one of his paintings was sold throughout his lifetime.                                
                            </li>
                            <li>
                                He finally settled in a small town near Paris to continue his painting but his frequent psychotic episodes in addition to his depression took their toll. 
                            </li>
                            <li>
                                He died of a self inflicted gunshot wound at the age of 37.
                            </li>
                            <li>
                                The Sad part is, Van Gogh considered himself an abject faliure and could never see nor know the fame his artworks bought to his name after his death. Here is a heartfelt <a href='https://www.youtube.com/watch?v=ubTJI_UphPk'>video</a> from the TV series Dr Who.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    
                    <div className="paintinginfo">
                        <h3>The Starry Night</h3>
                        <ul>   
                            <li>
                                <i>The Starry Night</i> is housed at the Museum of Modern Art in New York City since 1941.
                            </li>
                            <li>
                                The Starry Night is famous around the globe for its painter's unique view of the night sky.
                            </li>
                            <li>
                                The painting depicts the view from Van Gogh's bedroom window in the mental asylum where he was staying in 1889. 
                            </li>
                            <li>
                                Well, the painting is 'mostly' a view from Van Gogh's bedroom window, with the village at the bottom right corner being imaginary.
                            </li>
                            <li>
                                Interestingly, this was not the only time he painted this view, he painted the same view in different time of the day, with different weather and lighting conditions, about 21 times in total. But The Starry Night gained the most recognition amongst them all.                                
                            </li>
                        </ul>
                    </div>
                    <div className="imagewrapper">
                        <img src={painting} className="painting" alt='monalisa' />
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

export default VanGogh;