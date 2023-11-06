import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/hokusai.jpg';
import painting from '../images/tsunami.jpg';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';

function Hokusai(){
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
            data.append('imageno',"hokusai");

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
                    
                    <div className="imagewrapper">
                        <img src={painterimage} className="painting" alt='katsushika hokusai'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Katsushika Hokusai</h3>
                        <ul>
                            <li>
                                Hokusai was a Japanese <a href='https://en.wikipedia.org/wiki/Ukiyo-e'>ukiyo-e</a> artist of the edo period.
                            </li>
                            <li>
                                He is best known for his woodblock print series <i>Thirty-Six views of Mount Fuji</i> which also containted <i>The Great Wave off Kanagawa</i>.                                
                            </li>
                            <li>
                                His works are thought to have had a significant influence on <Link className='styleremover' to='/imagegeneration/vangogh'>Van Gogh</Link> during the wave of <a href='https://en.wikipedia.org/wiki/Japonisme'>Japonisme</a> that spead in europe in the late 19th century. 
                            </li>
                            <li>
                                Although famous as a ukiyo-e artist, he still worked in variety of mediums like paintings and book-illustrations. 
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    
                    
                    <div className="paintinginfo">
                        <h3>The Great Wave off Kanagawa</h3>
                        <ul>   
                            <li>
                                <i>The Great Wave off Kanagawa</i> is a woodblock print rather than a painting.
                            </li>
                            <li>
                                The print depicts 3 boats moving through a strom-tossed sea, with Mount Fuji visible in the background
                            </li>
                            <li>
                                Several museums throughout the world hold copies of <i>The Great Wave</i>, many of which came from 19th century private collections of Japanese prints. 
                            </li>
                            <li>
                                <i>The Great Wave off Kanagawa</i> has been described as possibly the most reproduced image in the history of all art.
                            </li>
                            <li>
                                It is also considered to be the most famous artwork in Japanese History.                                
                            </li>
                        </ul>
                    </div>

                    <div className="imagewrapper">
                        <img src={painting} className="painting" alt='the great wave off kanagawa' />
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

export default Hokusai;