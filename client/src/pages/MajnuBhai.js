import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/majnubhai.jpg';
import painting from '../images/donkeyonhorse.jpg'
import Footer from '../components/footer';

function DaVinci(){
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setFile1("Wait while we process your request!");
    };

    async function uploadFile(e){
        handleChange(e);
        const file = e.target.files[0];
        if(file != null){
            const data = new FormData();
            data.append('file_from_react',file);
            data.append('imageno',"majnubhai");

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
                        <img src={painterimage} className="painting" alt='majnu bhai'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Sagar "Majnu" Pandey</h3>
                        <ul>
                            <li>
                                Often called just "Majnu Bhai" by his closed ones, he is a painter without peer.
                            </li>
                            <li>
                                Majnu bhai gained recognition, specifically for his paintings, after organizing a successfully self funded charity event to showcase his paintings to the world.
                            </li>
                            <li>
                                His paintings have been valued at amazingly high prices, often at the peril of the evaluator.
                            </li>
                            <li>
                                Some of Majnu Bhai's other hobbies include helping his elder brother Uday Bhai run the family business.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    <div className="paintinginfo">
                        <h3>Donkey, Perched on a Horse</h3>
                        <ul>   
                            <li>
                                This highly meaningful painting is often considered as the <i>magnum opus</i> of Majnu Bhai.
                            </li>
                            <li>
                                The painting depicts a donkey, perched gracefully atop a horse. Many art critics have seen deep meaning in such an unconventional painting.
                            </li>
                            <li>
                                There have been dissenters who have questioned the artistic quality and vision of the painting but we could only talk to their grieving loved ones at this point in time. 
                            </li>
                        </ul>
                    </div>
                    {/*Yaha pe painting ki information in list with bullets removed aur uske bad vo painting khud */}
                    <div className="imagewapper">
                        <img src={painting} className="painting" alt='donkeyonhorse' />
                    </div>
                </div>
                <div className="userinput">
                    <img src={file} className="userimage" alt=''/>
                    <input type='file' accept='image/*' onChange={uploadFile} className="userinput"/>
                    <div>{file1}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DaVinci;