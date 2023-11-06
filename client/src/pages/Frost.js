import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from 'C:/Users/admin/Desktop/btp/client/src/images/frost.jpg';
import Footer from '../components/footer';

function Frost(){
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    const [poemfile, setPoemfile] = useState();

    async function uploadFile(e){
        setFile1('Wait while we whip up a poem for you, it may take a few moments')
        const file = document.getElementById('usertext').value;
        if(true){
            const data = new FormData();
            data.append('file_user_text',file);
            data.append('poet',"frost");

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
                    <div className="imagewrapper">
                        <img src={painterimage} className="painting" alt='robert frost'/>
                    </div>
                    <div className="painterinfo">
                        <h3>Robert Lee Frost</h3>
                        <ul>
                            <li>
                                Frost was born in San Fransisco to a journalist writing for the San Fransisco Evening Bulletin.
                            </li>
                            <li>   
                                Frost was a famous american poet well known for his realistic depictions of american rural life and the colloquial speech used therein.
                            </li>
                            <li>
                                Interestingly, his work was appreciated first in England and then spread to USA.
                            </li>
                            <li>
                                Forst is also the only poet to receive the Pullitzer Prize for Poetry a record four times.
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

export default Frost;