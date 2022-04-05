import {Route, Redirect} from "react-router-dom";
import { useState, useEffect } from "react";

export default function MyRoute({component: Component, isClosed, ...rest}){
  const [isLogged, setIsLogged] = useState();
  
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
  
  if(isLogged === false && isClosed){
    return(
      <Redirect 
        to={{pathname: "/signin", state: {prevPath: rest.location.pathname}}}
      />      
    )
  }

  return <Route {...rest} component={Component} />;
}