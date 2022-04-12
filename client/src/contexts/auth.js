import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
  const [signed, setSigned] = useState();

  useEffect(()=>{
    (function conferirStorage(){
      const token = localStorage.getItem("token");
      if(token){
        setSigned(true);
      } else {
        setSigned(false)
      }
    })(); 
  }, [signed]);

  return (
    <AuthContext.Provider value={{signed}}>
      {children}
    </AuthContext.Provider>
  )
}