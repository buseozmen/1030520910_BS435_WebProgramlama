import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceGrinTongueSquint, faFaceGrinWink} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


function Home() {
    const [selectedMode, setSelectedMode] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedMode === 'uzay') {
            navigate('/uzay' ,{ state: { userName } });
        } else if (selectedMode === 'deniz') {
            navigate('/deniz' ,{ state: { userName } });
        }

    };
    const handleModeSelect = (event) => {
        setSelectedMode(event.target.value);
    };
    return(
        <div className={"d-flex align-items-center"}>
            <div className="container d-flex flex-column container  align-items-center" style={{backgroundColor:"black",border:'10px solid #6B48FF',padding:'2rem',borderRadius:'90px'}}>
                <div>
                    <h2 style={{color:'#FF0075'}}> Sayı Tahmin Oyuna Hoşgeldiniz! </h2>
                </div>
                <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
                    <form onSubmit={handleSubmit}>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <label style={{color:'#FF0075'}}><b>Adınız lütfen</b>  <FontAwesomeIcon icon={faFaceGrinWink} /> </label>
                            <input placeholder={"Adınızı giriniz.."} value={userName} onChange={handleUsernameChange} style={{marginBottom:"3rem",backgroundColor:'black',color:'#FF0075',border:'4px solid #6B48FF',padding:'5px'}}/>
                            <div style={{color:'#FF0075',marginBottom:"1rem"}}><b>Oyun Modu Seçiniz <FontAwesomeIcon icon={faFaceGrinTongueSquint} /></b></div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"2rem"}}>
                                <label style={{color:"#6B48FF",marginRight:"2rem"}}>
                                    <input name={"mod"} type={"radio"} value={"uzay"} onChange={handleModeSelect}></input><b>Uzay Modu</b>
                                </label>
                                <label style={{color:"#6B48FF"}}>
                                    <input name={"mod"} type={"radio"} value={"deniz"} onChange={handleModeSelect}></input><b>Deniz Modu</b>
                                </label>
                            </div>
                            <button type={"submit"} style={{color:"#FF0075",backgroundColor:"black",border:"4px solid #6B48FF",padding:"0.5rem 3rem"}}><b>BAŞLA</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Home;