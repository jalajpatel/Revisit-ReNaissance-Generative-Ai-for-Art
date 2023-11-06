import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from 'C:/Users/admin/Desktop/btp/client/src/images/shakespeare.jpg';
import Footer from '../components/footer';

function Shakespeare(){
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    const [poemfile, setPoemfile] = useState();

    async function uploadFile(e){
        setFile1('Wait while we whip up a poem for you, it may take a few moments')
        const file = document.getElementById('usertext').value;
        if(true){
            const data = new FormData();
            data.append('file_user_text',file);
            data.append('poet',"shakespeare");

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
                        <img src={painterimage} className="painting" alt='william shakespeare'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>William Shakespeare</h3>
                        <ul>
                            <li>
                                Shakespeare was an English Playwright, poet and actor and is widely regarded as the greatest writer in the English language.
                            </li>
                            <li>
                                Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire.
                            </li>
                            <li>
                                Yes, it is true that William Shakespeare married a Miss Anne Hathaway, perhaps not the one you know.
                            </li>
                            <li>
                                A few of his plays are based not in England as you might expect, but rather in other kingdoms like Denmark, because in those times, it was illegal to portray regicide on stage of a monarch of England.
                            </li>
                            <li>
                                Thus, to get around this obstacle, he based those of his plays where a king or a prince dies in other european kingdoms, as is the case in <i>Hamlet</i>.
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

export default Shakespeare;