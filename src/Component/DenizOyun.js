import {useLocation, useNavigate} from "react-router-dom";
import deepSea from "../resimler/deepsea.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWater} from "@fortawesome/free-solid-svg-icons";
import { ProgressBar } from 'react-bootstrap';
import React, {useEffect, useState} from "react";


function DenizOyun(props) {
    const location = useLocation();
    const userName = location.state && location.state.userName;
    const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [userGuess, setUserGuess] = useState('');
    const [distance, setDistance] = useState(null);
    const [oxygenLevel, setOxygenLevel] = useState(100);
    const [kazanKaybet , setKazanKaybet] = useState(false);
    const [oyunbitti, setOyunbitti] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const oxygenInterval = setInterval(() => {
            if (oxygenLevel > 0 && distance !== 0) {
                setOxygenLevel((prevOxygenLevel) => prevOxygenLevel - 2);
            }
            else if(oyunbitti==="Tebrikler! Doğru sinyal kodunu buldun. Deniz altına sinyal gönderildi. Birazdan burada olurlar.."){

            }
            else{
                setKazanKaybet(true);
                setOyunbitti("Maalesef oksijeniniz bitti ve boğuldunuz..");
            }

        }, 1000); // Her saniyede bir azaltmak için
        return () => clearInterval(oxygenInterval);
    }, [oxygenLevel,distance]);

    const handleGuess = (event) => {
        event.preventDefault();
        const userNumber = parseInt(userGuess);
        if ((!isNaN(userNumber) )&& (!kazanKaybet)) {
            const newDistance = Math.abs(userNumber - randomNumber);
            setDistance(newDistance);

            if((newDistance===0 ) ){
                setKazanKaybet(true);
                setOyunbitti("Tebrikler! Doğru sinyal kodunu buldun. Deniz altına sinyal gönderildi. Birazdan burada olurlar..");
                //doğru bildin

            }else if((oxygenLevel === 0)){
                setKazanKaybet(true);
                setOyunbitti("Maalesef oksijeniniz bitti ve boğuldunuz..");
                //yanlış bildin
            }
        }
        //setUserGuess('');
    };
    const handleInputChange = (event) => {
        setUserGuess(event.target.value);
    };
    const handleCikisClick = () => {

        navigate('/');
    };
    return(

        <div style={{ height: "100%",width: "100%",backgroundImage:`url(${deepSea})`,backgroundSize: 'cover',display:"flex",flexDirection:"column",alignItems:"center"}}>
           <div>{kazanKaybet ? <div style={{
               display:"flex",
               flexDirection:"column",
               alignItems:"center",
               width:"400px",
               height:"200px",
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               backgroundColor: '#ACFADF',
               padding: '2rem',
               borderRadius: '50px',
               border: '10px solid #0766AD',
               zIndex: '999', // Diğer öğelerin üzerine çıkması için yüksek z-index
           }}><p style={{color:"#0766AD",fontSize:"16px",marginBottom:"1rem"}}><strong>{oyunbitti}</strong></p>
               <button onClick={handleCikisClick} type={"button"} style={{color:"#0766AD",backgroundColor:"#ACFADF",border:"4px solid #0766AD",padding:"0.5rem 1rem",borderRadius:"10px",fontSize:"15px"}}><strong>Çıkış</strong></button>
           </div>:<div></div>}</div>
            <div>
            <div style={{display:"flex",justifyContent:"center"}}><h2 style={{ color:"white",fontSize:"40px",marginTop:"5rem"}}><FontAwesomeIcon icon={faWater} style={{color:"#0766AD"}}/> <strong style={{color:"#ACFADF"}}>DENİZ</strong> <FontAwesomeIcon icon={faWater} style={{color:"#0766AD"}} /></h2></div>
            <div style={{display:"flex",justifyContent:"center"}}><p style={{color:"#ACFADF",fontSize:"18px"}}><img width="30" height="30" src="https://img.icons8.com/ios/50/captain.png" alt="captain"/> <strong>Kaptan : {userName}</strong> </p></div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"3rem",width:"800px"}}><p style={{color:"#ACFADF",fontSize:"18px"}}>Unutma zamanla oksijen tüpündeki oksijen seviyesi düşecektir. Toplamda 100 saniyen var. Uzaklık bildirisine göre mantıklı denemeler yap. İşte sana bir ipucu, sinyal kodu 0-100 arasında..
                Şansını akıllıca kullan.!</p></div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"2rem"}}>
                    <div style={{color:"white"}}>Oksijen Miktarı</div>
                    <div><ProgressBar variant="danger" now={oxygenLevel} style={{width:"200px"}}/></div>
                </div>
                <div className="container d-flex flex-column container  align-items-center" style={{border:'10px solid #0766AD',padding:'2rem',borderRadius:'90px',margin:"2rem"}}>
                    <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
                        <form onSubmit={handleGuess}>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <label style={{color:'#ACFADF',fontSize:"15px"}}><img width="40" height="40" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/external-submarine-transport-xnimrodx-lineal-gradient-xnimrodx.png" alt="external-submarine-transport-xnimrodx-lineal-gradient-xnimrodx"/> <b>Sinyal Kodunu Giriniz.!</b> <img width="40" height="40" src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/external-submarine-transport-xnimrodx-lineal-gradient-xnimrodx.png" alt="external-submarine-transport-xnimrodx-lineal-gradient-xnimrodx"/> </label>
                                <input value={userGuess} onChange={handleInputChange} placeholder={"Kodu giriniz.."} type={"number"} style={{marginBottom:"3rem",color:"#0766AD",backgroundColor:"#ACFADF",border:'4px solid #0766AD',padding:'5px'}}/>
                                <button type={"submit"} style={{color:"#0766AD",backgroundColor:"#ACFADF",border:"4px solid #0766AD",padding:"0.5rem 1rem"}}><b>Sinyal Gönder</b></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"2rem"}}>
                    <div style={{color:"white"}}>Uzaklık</div>
                    <div><ProgressBar variant="info" now={distance} style={{width:"200px"}}/></div>
                </div>
            </div>
            </div>
        </div>

        );
}
export default DenizOyun;