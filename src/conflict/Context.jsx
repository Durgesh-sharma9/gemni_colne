import { createContext, useState } from "react";
import maincall from "./gemni.mjs";

// Create and export the context
export const Context = createContext();

const ContextProvider = (props) => {
  // State declarations
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [previousprompt, setpreviousprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  // Typing effect: adds each word with a delay
  const delaypara = (index, nextword) => {
    setTimeout(() => {
      setresultdata((prev) => prev + nextword);
    }, 50 * index); // 75ms per word
  };

  const newchat = ()=>{
    setloading(false)
    setshowresult(false)
  }

  // Handle user sending a prompt
  const onsent = async (prompt) => {
    setresultdata("");            // Clear old response
    setloading(true);            // Show loading state
    setshowresult(true);          // Switch to result screen

    let response;
    if(prompt !== undefined){
      response = await maincall(prompt)
    }
    else{
      setpreviousprompt(prev=>[...prev,input])
      setrecentprompt(input)
      response = await maincall(input)
    }
           
    

    // Bold formatting using **...**
    let responsearray = response.split("**");
    let newarray = "";

    for (let i = 0; i < responsearray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newarray += responsearray[i];
      } else {
        newarray += "<b>" + responsearray[i] + "</b>";
      }
    }

    // Convert * to <br> (line break)
    let brandNewArray = newarray.split("*").join("<br>");

    // Split into words for typing animation
    let newResponseArray = brandNewArray.split(" ");

    // Animate typing each word
    for (let i = 0; i < newResponseArray.length; i++) {
      delaypara(i, newResponseArray[i] + " ");
    }

    // Do NOT instantly set full text — typing effect handles it
    // setresultdata(brandNewArray); // ❌ Removed to avoid sudden display

    setloading(false);           // Done loading
    setinput("");                // Clear input field
  };

  // Context value to provide to all consumers
  const contextValue = {
    onsent,
    input,
    setinput,
    recentprompt,
    setpreviousprompt,
    setrecentprompt,
    previousprompt,
    showresult,
    loading,
    resultdata,
    newchat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
