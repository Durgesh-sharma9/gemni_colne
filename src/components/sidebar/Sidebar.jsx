import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../conflict/context";
function Sidebar() {
  const [extend, setextend] = useState(false);
  const {onsent,setpreviousprompt, newchat,setrecentprompt, previousprompt} = useContext(Context)
  
  const loadprompt = async (prompt) => {
    setrecentprompt(prompt)
    await onsent(prompt)
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={()=>{setextend(!extend)}}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div onclick={()=>{newchat()}}className="newchat">
          <img src={assets.plus_icon} alt="plus" />
          {extend ? <p>New Chats</p> : null}
        </div>  
        {extend ? (
          <div className="recent">
            <p className="recenttitle">Recent</p>

           {
            previousprompt.map((item,index)=>{
              return(
               <div onClick={()=>loadprompt(item)}className="recent-entry">


              <img src={assets.message_icon} alt="message" />
              <p>{item.slice(0,18)}...</p>
            </div>
              )
            })
           }
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-icons recent-entry">
          <img src={assets.question_icon} alt="question" />
          {extend ? <p>Help</p>:null}
        </div>
        <div className="bottom-icons recent-entry">
          <img src={assets.history_icon} alt="question" />
          {extend ? <p>History</p>:null}
        </div>
        <div className="bottom-icons recent-entry">
          <img src={assets.setting_icon} alt="question" />
          {extend ? <p>Setting</p>:null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
