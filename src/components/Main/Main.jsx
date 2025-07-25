import { assets } from "../../assets/assets";
import "./../Main/Main.css";
function Main(){
    return(
        <div className="main">
            <div className="nav">
                <p>Gemni</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-cont">
                <div className="greet">
                  <p><span>Hello Dev..</span></p>
                  <p>How Can I Help You Today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p> jjsf flsuihefiuhsciu xercitationem, similique obcaecati repellendus?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> jjsf flsuihefiuhsciu xercitationem, similique obcaecati repellendus?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> jjsf flsuihefiuhsciu xercitationem, similique obcaecati repellendus?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> jjsf flsuihefiuhsciu xercitationem, similique obcaecati repellendus?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search">
                        <input type="text" placeholder="Enter your prompt here" />
                        <div>
                            <img src={assets.gallery_icon}alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                     <p className="bottom-info">
                   jjsf flsuihefiuhsciu xercitationem, similique obcaecati repellendus?  
                </p>
                </div>
               
            </div>
        </div>
    )
}
export default Main;