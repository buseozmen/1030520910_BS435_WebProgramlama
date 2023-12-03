import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFaceGrinTongueSquint, faFaceGrinWink,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
      <div className={"d-flex align-items-center"}>
          <div className="container d-flex flex-column container  align-items-center" style={{backgroundColor:"black",border:'10px solid #6B48FF',padding:'2rem',borderRadius:'90px'}}>
              <div>
                  <h2 style={{color:'#FF0075'}}> Sayı Tahmin Oyuna Hoşgeldiniz! </h2>
              </div>
              <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
                  <form>
                      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                          <label style={{color:'#FF0075'}}><b>Adınız lütfen</b>  <FontAwesomeIcon icon={faFaceGrinWink} /> </label>
                          <input placeholder={"Adınızı giriniz.."} style={{marginBottom:"3rem",backgroundColor:'black',color:'#FF0075',border:'4px solid #6B48FF',padding:'5px',focus:"border:none"}}/>
                          <div style={{color:'#FF0075',marginBottom:"1rem"}}><b>Oyun Modu Seçiniz <FontAwesomeIcon icon={faFaceGrinTongueSquint} /></b></div>
                          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"2rem"}}>
                              <label style={{color:"#6B48FF",marginRight:"2rem"}}>
                                  <input name={"mod"} type={"radio"} value={"uzay"}></input><b>Uzay Modu</b>
                              </label>
                              <label style={{color:"#6B48FF"}}>
                                  <input name={"mod"} type={"radio"} value={"yer"}></input><b>Yer Altı Modu</b>
                              </label>
                          </div>
                          <button style={{color:"#FF0075",backgroundColor:"black",border:"4px solid #6B48FF",padding:"0.5rem 3rem"}}><b>BAŞLA</b></button>
                      </div>
                  </form>
              </div>
          </div>
      </div>

  );
}

export default App;
