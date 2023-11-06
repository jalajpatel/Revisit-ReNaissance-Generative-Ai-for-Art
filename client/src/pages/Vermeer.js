import Navbar from "../components/navbar";
import React,{useState} from 'react';
import FormData from 'form-data';
import painterimage from '../images/vermeer.jpg';
import painting from '../images/girlwithapearlearing.jpg';
import Footer from '../components/footer';

function Vermeer(){
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
            data.append('imageno',"vermeer");

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
                        <img src={painterimage} className="painting" alt='johannes vermeer'/>
                    </div>
                    
                    <div className="painterinfo">
                        <h3>Johannes Vermeer</h3>
                        <ul>
                            <li>
                                Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life.
                            </li>
                            <li>
                                Throughout his lifetime, he earned relatively few paintings, primarily earning his living as an art dealer.                                
                            </li>
                            <li>
                                Vermeer worked slowely and with great care, and frequently used very expensive pigments. 
                            </li>
                            <li>
                                He is particulary renowned for his masterly treatment and use of light in his works. 
                            </li>
                            <li>
                                Until a few centuries back, he was not considered to be important enough to be mentioned amongst noteworthy painters of his time. But he was gradually rediscovered and his work rightly appreciated by all.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='aboutpainting'>
                    
                    <div className="paintinginfo">
                        <h3>Girl with a Pearl Earing</h3>
                        <ul>   
                            <li>
                                <i>Girl with a Pearl Earing</i> is in the collection of the Mauritshuis in the Hague.
                            </li>
                            <li>
                                The painting is quite famous for the masterful use of light which it exibits.
                            </li>
                            <li>
                                The painting has gone by various names since its creation like 'the girl with the turban' and 'painted in turkish fashion' before settling on the current title. 
                            </li>
                            <li>
                                It has been theorised that the pearl earing is in fact made of tin due to its size and reflective properties.
                            </li>
                            <li>
                                The painting went to auction in the Hague in 1881 and was bought for two guilders plus 30 cents buyer's premium. This amounts to 24 euros at current purchasing power.                                
                            </li>
                        </ul>
                    </div>
                    <div className="imagewrapper">
                        <img src={painting} className="painting" alt='girl with a pearl earing' />
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

export default Vermeer;