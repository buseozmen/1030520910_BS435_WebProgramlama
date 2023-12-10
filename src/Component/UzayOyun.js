import {useLocation} from "react-router-dom";
import uzayResmi from '../resimler/uzay_resmi.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faShuttleSpace,
    faUserAstronaut
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


function UzayOyun() {
    const location = useLocation();
    const userName = location.state && location.state.userName;
    const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [userGuess, setUserGuess] = useState('');
    const [distance, setDistance] = useState(0);
    const [oxygenLevel, setOxygenLevel] = useState(100);

    const handleGuess = (event) => {
        event.preventDefault();
        const userNumber = parseInt(userGuess);

        if (!isNaN(userNumber)) {
            const newDistance = Math.abs(userNumber - randomNumber);
            setDistance(newDistance);
            const newOxygenLevel = oxygenLevel - 20; // Her tahminde oksijen düşsün
            setOxygenLevel(newOxygenLevel);
        }

        // Kullanıcı ile rastgele sayı arasındaki farka göre ilerleme hesaplanabilir
    };

    const handleInputChange = (event) => {
        setUserGuess(event.target.value);
    };
    return(
        <div style={{ height: "100vh",width: "100%",backgroundImage:`url(${uzayResmi})`,backgroundSize: 'cover',display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div><h2 style={{color:"white",fontSize:"40px",marginTop:"5rem"}}><FontAwesomeIcon icon={faShuttleSpace} style={{color:"#14279B"}}/> <strong style={{color:"#FF6000"}}>UZAY</strong> <FontAwesomeIcon icon={faShuttleSpace} style={{color:"#14279B"}} /></h2></div>
            <div style={{display:"flex",justifyContent:"center"}}><p style={{color:"#14279B",fontSize:"18px"}}><FontAwesomeIcon icon={faUserAstronaut} /> <strong>Astronot : {userName}</strong> </p></div>
            <div style={{display:"flex",justifyContent:"center",marginTop:"3rem",width:"800px"}}><p style={{color:"#FF6000",fontSize:"18px"}}>Unutma her denemede harekete bağlı olarak oksijen tüpündeki oksijen seviyesi düşecektir. Uzaklık bildirisine göre mantıklı denemeler yap. İşte sana bir ipucu, sinyal kodu 0-100 arasında..
                Şansını akıllıca kullan.!</p></div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"2rem"}}>
                    <div style={{color:"white"}}>Oksijen Miktarı</div>
                    <div><ProgressBar variant="danger" now={oxygenLevel} style={{width:"200px"}}/></div>
                </div>
                <div className="container d-flex flex-column container  align-items-center" style={{border:'10px solid #14279B',padding:'2rem',borderRadius:'90px',margin:"2rem"}}>
                    <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
                        <form onSubmit={handleGuess}>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <label style={{color:'#FF6000',fontSize:"15px"}}><img width="40" height="40" src="https://img.icons8.com/arcade/64/launch-rocket.png" alt="launch-rocket"/><b>Sinyal Kodunu Giriniz.!</b><img width="40" height="40" src="https://img.icons8.com/arcade/64/launch-rocket.png" alt="launch-rocket"/> </label>
                                <input value={userGuess}
                                       onChange={handleInputChange} placeholder={"Kodu giriniz.."} type={"number"} style={{marginBottom:"3rem",color:"#14279B",backgroundColor:"#FF6000",border:'4px solid #14279B',padding:'5px'}}/>
                                <button type={"submit"} style={{color:"#14279B",backgroundColor:"#FF6000",border:"4px solid #14279B",padding:"0.5rem 1rem"}}><b>Sinyal Gönder</b></button>
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
    );
}
export default UzayOyun;