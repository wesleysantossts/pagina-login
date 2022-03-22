import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({component: Component, isClosed, ...rest}){
  const isLogged = false;

  if(isClosed && !isLogged){
    return(
      <Redirect 
        to={{pathname: "/login", state: {prevPath: rest.location.pathname}}}
      />      
    )
  }

  return <Route {...rest} component={Component} />;
}

// validação
MyRoute.defaultProps = {isClosed: false};
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool
}