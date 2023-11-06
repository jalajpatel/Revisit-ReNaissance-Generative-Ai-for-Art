import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from 'C:/Users/admin/Desktop/btp/client/src/images/whitman.jpg';
import Footer from '../components/footer';

function Whitman(){
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    const [poemfile, setPoemfile] = useState();

    async function uploadFile(e){
        setFile1('Wait while we whip up a poem for you, it may take a few moments')
        const file = document.getElementById('usertext').value;
        if(true){
            const data = new FormData();
            data.append('file_user_text',file);
            data.append('poet',"whitman");

            let response = await fetch('http://localhost:5000/poem_request',{
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
                setFile1('Here you go!');
                setPoemfile(res.poem);
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
                        <img src={painterimage} className="painting" alt='walt whitman'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Walter Whitman</h3>
                        <ul>
                            <li>
                                Walter Whitman Jr is considered as one of the most important poets in American history.
                            </li>
                            <li>   
                                Whitman is often termed as the father of the free verse. Free verse is a type of poetry.
                            </li>
                            <li>
                                During the American Civil War, he voluntereed to work at hospitals caring for the wounded.
                            </li>
                            <li>
                                But one of his most famous works is the poem 'O Captain! My Captain!', which he penned in tribute to Abraham Lincoln upon his assasination. The poem gained further widespread acclaim following its mention in the hollywood movie "Dead Poets Society".
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="userinput">
                    <div>You can input some text for our poet to use as seed! But try to keep it less than 15 words as they tend to get a bit overwhelmed after that :)</div>
                    <textarea cols="80" rows="8" id='usertext'/>
                    <input type='submit' onClick={uploadFile}/>
                    <div>{file1}</div>
                    <p className="poemdisplay">{poemfile}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Whitman;