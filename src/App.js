import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoePrints} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [value,setValue] = useState(0);

    const handleClick = () => {
        setValue(value+1);
    }
  return (
    <div className="container d-flex flex-column container mt-5 align-items-center" style={{backgroundColor:"#7071E8",border:'2px solid #8DDFCB',padding:'1rem'}}>
        <div>
            <h1 style={{color:'#ECEE81'}}>Oyuna Hoşgeldiniz</h1>
        </div>
        <div>
            <button className={<button type="button"></button>} onClick={handleClick} style={{backgroundColor:'#8DDFCB',color:'#ED9ED6',border:'2px solid #ED9ED6',padding:'5px'}}><FontAwesomeIcon icon={faShoePrints} /> <b>Adım atmak için tıklayınız.</b> <FontAwesomeIcon icon={faShoePrints} /></button>
        </div>
        <div>
            <div style={{color:'#ED9ED6'}}><b>Adım sayısı: {value}</b></div>
        </div>
    </div>
  );
}

export default App;
