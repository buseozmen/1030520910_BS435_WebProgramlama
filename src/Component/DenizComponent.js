import {useLocation, useNavigate} from "react-router-dom";
import deepSea from "../resimler/deepsea.jpg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShuttleSpace, faUserAstronaut, faWater} from "@fortawesome/free-solid-svg-icons";
import React from "react";


function DenizComponent(props) {
    const location = useLocation();
    const userName = location.state && location.state.userName;
    const navigate = useNavigate();

    const handleTamamClick = () => {
        // Yönlendirme işlemi burada gerçekleştirilecek
        navigate('/'); // Yönlendirilecek sayfanın yolunu belirtin
    };

    const handleDevamClick = () => {
        // Yönlendirme işlemi burada gerçekleştirilecek
        navigate('/deniz/deniz_oyun', { state: { userName } }); // Yönlendirilecek sayfanın yolunu belirtin
    };
    return(
        <div style={{height: "100vh",width: "100%",backgroundImage:`url(${deepSea})`,backgroundSize: 'cover',display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div><h2 style={{color:"white",fontSize:"40px",marginTop:"5rem"}}><FontAwesomeIcon icon={faWater} style={{color:"#0766AD"}}/> <strong style={{color:"#ACFADF"}}>DENİZ</strong> <FontAwesomeIcon icon={faWater} style={{color:"#0766AD"}} /></h2></div>
            <div style={{display:"flex",justifyContent:"center"}}><p style={{color:"#ACFADF",fontSize:"18px"}}><img width="30" height="30" src="https://img.icons8.com/ios/50/captain.png" alt="captain"/> <strong>Kaptan : {userName}</strong> </p></div>
            <div style={{marginTop:"2rem",display:"flex",justifyContent:"center",width:"800px"}}><p style={{color:"#ACFADF",fontSize:"18px"}}>Her şeyin yolunda gittiği bir deniz yolculuğu sırasında, denizaltına aniden bir cisim çarpması sonucu mürettebatınız panikledi.
                Bunun üzerine denizaltı kaptanı {userName} olarak keşif için denizaltından ayrıldınız. Fakat işlerin ters gitmesi sonucu denizlatı ile olan bağlantınız koptu. Denizin derinliklerinde artık tamamen yalnız ve savunmasızsınız. Oksijen tüpünüzdeki oksijen bitmeden deniz altını bulmak zorundasınız. Neyseki Kaptan Kol Bilgisayarınız yanınızda. Eğer doğru kodu girerseniz denizaltına sizi bulması için sinyal gönderecek.
                Toplamda 100 saniyeniz var. Şansını dene ya da denizin derinliklerinde tamamen kaybol. Tercihini yap ! Tamam mı ? Devam mı?</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"2rem"}}>
                <button onClick={handleTamamClick} style={{color:"#0766AD",backgroundColor:"#ACFADF",border:"4px solid #0766AD",padding:"0.5rem 3rem",marginRight:"3rem"}}><b>TAMAM.</b></button>
                <button onClick={handleDevamClick} style={{color:"#0766AD",backgroundColor:"#ACFADF",border:"4px solid #0766AD",padding:"0.5rem 3rem"}}><b>DEVAM !</b></button>
            </div>
        </div>
    );
}
export default DenizComponent;