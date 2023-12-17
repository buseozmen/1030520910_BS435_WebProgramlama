import {useLocation, useNavigate} from "react-router-dom";
import uzayResmi from '../resimler/uzay_resmi.jpg';
import uzayResmi2 from '../resimler/uzayResmi2.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShuttleSpace, faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

function UzayComponent(props) {
    const location = useLocation();
    const userName = location.state && location.state.userName;
    const navigate = useNavigate();

    const handleTamamClick = () => {

        navigate('/');
    };

    const handleDevamClick = () => {

        navigate('/uzay/uzay_oyun', { state: { userName } });
    };
    return(
        <div style={{height: "100vh",width: "100%",backgroundImage:`url(${uzayResmi})`,backgroundSize: 'cover',display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div><h2 style={{color:"white",fontSize:"40px",marginTop:"5rem"}}><FontAwesomeIcon icon={faShuttleSpace} style={{color:"#14279B"}}/> <strong style={{color:"#FF6000"}}>UZAY</strong> <FontAwesomeIcon icon={faShuttleSpace} style={{color:"#14279B"}} /></h2></div>
            <div style={{display:"flex",justifyContent:"center"}}><p style={{color:"#14279B",fontSize:"18px"}}><FontAwesomeIcon icon={faUserAstronaut} /> <strong>Astronot : {userName}</strong> </p></div>
            <div style={{marginTop:"2rem",display:"flex",justifyContent:"center",width:"800px"}}><p style={{color:"#FF6000",fontSize:"18px"}}>Her şeyin yolunda gittiği bir uzay yolculuğu sırasında, uzay geminize aniden bir cisim çarpması sonucu mürettebatınız panikledi.
                Bunun üzerine uzay gemisi kaptanı astronot "{userName}" olarak keşif için gemiden ayrıldınız. Fakat işlerin ters gitmesi sonucu gemi ile olan bağlantınız koptu. Uzay boşluğunda artık tamamen yalnız ve savunmasızsınız. Oksijen tüpünüzdeki oksijen bitmeden uzay gemisini bulmak zorundasınız. Neyseki Astronot Kol Bilgisayarınız yanınızda. Eğer doğru kodu girerseniz gemiye sizi bulması için sinyal gönderecek.
                En fazla 5 deneme hakkınız var. Şansını dene ya da uzay boşluğunda tamamen kaybol. Tercihini yap ! Tamam mı ? Devam mı ?</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"2rem"}}>
                <button onClick={handleTamamClick} style={{color:"#14279B",backgroundColor:"#FF6000",border:"4px solid #14279B",padding:"0.5rem 3rem",marginRight:"3rem"}}><b>TAMAM.</b></button>
                <button onClick={handleDevamClick} style={{color:"#14279B",backgroundColor:"#FF6000",border:"4px solid #14279B",padding:"0.5rem 3rem"}}><b>DEVAM !</b></button>
            </div>
        </div>
    );
}
export default UzayComponent;