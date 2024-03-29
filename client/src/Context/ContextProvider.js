import { createContext,useContext, useEffect, useState} from "react";

export const Context = createContext();

const ContextProvider =({children}) =>{
const [user, setUser] = useState("");


useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
},[])

    return < Context.Provider value={{user,setUser}}>{children}</Context.Provider>
    

}

export const ContextState = () =>{
    return useContext(ContextProvider);
}


export default ContextProvider;