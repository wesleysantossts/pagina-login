import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
  const [isLogged, setIsLogged] = useState(null);

  useEffect(()=>{
    (function conferirStorage(){
      const token = localStorage.getItem("token");
      
      if(token){
        setIsLogged(true);
        // console.log(isLogged);
      } else {
        setIsLogged(false)
      }
    })(); 
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{signed: !!isLogged}}>
      {children}
    </AuthContext.Provider>
  )
}