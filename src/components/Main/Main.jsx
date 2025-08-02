// React core hooks
import { useContext, useEffect } from "react";

// Assets & styles
import { assets } from "../../assets/assets";
import "./../Main/Main.css";

// Functions & context
import maincall from "../../conflict/gemni.mjs"; // Custom Gemini API call
import { Context } from "../../conflict/context"; // Global context provider

function Main() {
  // Destructure context values
  const {
    onsent,
    input,
    setinput,
    recentprompt,
    setpreviousprompt,
    setrecentprompt,
    previousprompt,
    showresult,
    loading,
    resultdata
  } = useContext(Context);

  return (
    <div className="main">
      {/* Top Navigation */}
      <div className="nav">
        <p>Gemni</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      {/* Main Content */}
      <div className="main-cont">
        {
          !showresult ? (
            <>
              {/* Greeting Section */}
              <div className="greet">
                <p>
                  <span>Hello Dev..</span>
                </p>
                <p>How Can I Help You Today?</p>
              </div>

              {/* Example Prompt Cards */}
              <div className="cards">
                <div className="card">
                  <p>
                   Explain quantum computing in simple words for a 10-year-old
                  </p>
                  <img src={assets.compass_icon} alt="Compass Icon" />
                </div>
                <div className="card">
                  <p>
                    Explain quantum computing in simple words for a 10-year-old
                  </p>
                  <img src={assets.bulb_icon} alt="Bulb Icon" />
                </div>
                <div className="card">
                  <p>
                    What are 3 futuristic business ideas using AI in 2030?
                  </p>
                  <img src={assets.message_icon} alt="Message Icon" />
                </div>
                <div className="card">
                  <p>
                    List 5 interesting facts about the human brain that sound fake but are true
                  </p>
                  <img src={assets.code_icon} alt="Code Icon" />
                </div>
              </div>
            </>
          ) : (
            // Show result after prompt sent
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="User Icon" />
                <p>{recentprompt}</p> {/* ✅ Corrected: now shows the prompt value */}
              </div>

              <div className="resultdata">
                <img src={assets.gemini_icon} alt="Gemini Icon" />
                {
                  loading?
                  <div className="loading">
                     <hr />
                     <hr />
                     <hr />
                  </div>
                  :
                  
                  <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                }
                
                
              </div>
            </div>
          )
        }

        {/* Bottom Search Input */}
        <div className="main-bottom">
          <div className="search">
            <input
              type="text"
              onChange={(e) => setinput(e.target.value)}
              value={input}
              placeholder="Enter your prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {input?<img onClick={() => onsent()} src={assets.send_icon} alt="Send Icon" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Made by dev 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
