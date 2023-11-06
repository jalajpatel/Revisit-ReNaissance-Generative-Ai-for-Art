import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/davinci.jpg';
import painting from '../images/monalisa3.jpg'
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
            data.append('imageno',"davinci");

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
                        <img src={painterimage} className="painting" alt='leonardo da vinci'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Leonardo Da Vinci</h3>
                        <ul>
                            <li>
                                He was born in or around the small Tuscan town of <b>Vinci</b>, in the center of modern day <b>Italy</b>. So no he was not french, but he did die in France and is buried there. Spoiler Alert!
                            </li>
                            <li>
                                Da Vinci was not only an accomplished painter but also an engineer, scientist, theorist, sculptor and architect. One of his most precious work is not a painting, but rather for <a href='https://en.wikipedia.org/wiki/Leonardo_da_Vinci#Journals_and_notes'>his notebooks</a>.
                            </li>
                            <li>
                                His most famous painting is the venerable <b>Mona Lisa</b>, but not only that, he is also credited as being the founder of the <a href='https://en.wikipedia.org/wiki/High_Renaissance'>High Renaissance</a>
                            </li>
                            <li>
                                He is also credited for building the concept for a machine that we today call as the helicopter!
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    <div className="paintinginfo">
                        <h3>Mona Lisa</h3>
                        <ul>   
                            <li>
                                <i>The Mona Lisa</i> is housed at arguably the most famous art museum in the world, the Louvre.
                            </li>
                            <li>
                                Mona Lisa is famous around the world for her enagmatic smile and etherial lighting, which have fascinated famous artists for centuries.
                            </li>
                            <li>
                                The painting is believed to depict the Italian Nobelwoman Lisa del Giocondo, though Da Vinci never gave the painting to the Giocondo family. 
                            </li>
                            <li>
                                After Da Vinci's death, the painting was aquired by Francis I of France. From the date of the formation of the French Republique (Guillotine Noises Intensify), the painting has been the property of the French Republic.
                            </li>
                            <li>
                                Mona Lisa gained widespread public attention after it was stolen in 1911. It was later recovered in 1913 from an Italian artist who believed that Mona Lisa rightfully belonged to the Italian people.
                            </li>
                                
                        </ul>
                    </div>
                    {/*Yaha pe painting ki information in list with bullets removed aur uske bad vo painting khud */}
                    <div className="imagewapper">
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

export default DaVinci;