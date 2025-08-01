import { createContext, useState } from "react";
import maincall from "./gemni.mjs";

// Use PascalCase for exported context variable
export const Context = createContext();

const ContextProvider = (props) => {

    const[inputdata ,setinput] = useState('')
    const[resentdata ,setrecentdata] = useState('')
    const[previousdata ,setpreviousdata] = useState([])
    const[showdata ,setshowdata] = useState(false)
    const[loading ,setloading] = useState(false)
    const[recent ,setrecent] = useState('')

const onsent = async(data)=>{
    await maincall(input);
}
onsent('hello');
  const contextValue = {
    onsent,inputdata,setinput,resentdata,setrecentdata,previousdata,setpreviousdata,showdata,loading,recent

  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
