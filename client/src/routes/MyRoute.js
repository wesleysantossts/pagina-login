import {Route, Redirect} from "react-router-dom";
import { useContext } from "react";

import {AuthContext} from "../contexts/auth";

export default function MyRoute({component: Component, isClosed, ...rest}){
  const {signed} = useContext(AuthContext);
  
  if(signed === false && isClosed){
    return(
      <Redirect 
        to={{pathname: "/signin", state: {prevPath: rest.location.pathname}}}
      />      
    )
  }

  return <Route {...rest} component={Component} />;
}