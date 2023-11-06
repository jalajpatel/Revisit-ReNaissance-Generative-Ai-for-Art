import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/munch.jpg';
import painting from '../images/scream.jpg'
import {Link} from 'react-router-dom';
import Footer from '../components/footer';

function Munch(){
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
            data.append('imageno',"munch");

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
                        <img src={painterimage} className="painting" alt='edvard munch'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Edvard Munch</h3>
                        <ul>
                            <li>
                                Munch was a Norwegian Painter known for his Magnus Opus, the Scream.
                            </li>
                            <li>
                                His childhood was overshadowed by illness, bereavement and the dread of inheriting a menal condition.                                
                            </li>
                            <li>
                                He studied at the Royal School of Art and Design in Kristiania and started 'soul painting'. 
                            </li>
                            <li>
                                He extensively traveled in his late 20s and early 30s and gained new influences like <Link className="styleremover" to='/imagegeneration/vangogh'>Van Gogh</Link> and Gaugin. 
                            </li>
                            <li>
                                His works were banned in Nazi-occupied Europe but most of them survived WW II, thus securing him a legacy.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    
                    <div className="paintinginfo">
                        <h3>The Scream</h3>
                        <ul>   
                            <li>
                                <i>The Scream</i> is currently kept in the National Gallery of Norway in Oslo.
                            </li>
                            <li>
                                The Scream is known for its eerie depiction of human anxiety.
                            </li>
                            <li>
                                Munch remarked that the inspiration for this piece came on a walk when he 'sensed and infinite scream passing through nature'. 
                            </li>
                            <li>
                                The painting has 4 versions, 2 in paint and 2 in pastels. The oldest of them is in paint and is housed in the National Gallery of Norway.
                            </li>
                            <li>
                                Interestingly, Munch wrote the following on the oldest painting with a pencil "Could only have been painted by a madman".                                
                            </li>
                            <li>
                                The painting has been stolen and recovered successfully twice, adding to the general intrigue surrounding it.
                            </li>
                        </ul>
                    </div>

                    <div className="imagewrapper">
                        <img src={painting} className="painting" alt='scream' />
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

export default Munch;