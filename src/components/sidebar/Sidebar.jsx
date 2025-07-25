import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
function Sidebar() {
  const [extend, setextend] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={()=>{setextend(!extend)}}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div className="newchat">
          <img src={assets.plus_icon} alt="plus" />
          {extend ? <p>New Chats</p> : null}
        </div> 
        {extend ? (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message" />
              <p>What is react....</p>
            </div>
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
