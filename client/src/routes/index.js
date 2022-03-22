import {Switch} from "react-router-dom";
import MyRoute from "./MyRoute";

import Signup from "../view/Signup";
import Signin from "../view/Signin";
import Home from "../view/Home";
import Page404 from "../view/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/signup" component={Signup} /*isClosed*/ />
      <MyRoute path="/signin" component={Signin} /*isClosed*/ />
      <MyRoute path="/home" component={Home} isClosed />
      <MyRoute path="*" component={Page404}/>
    </Switch>
  );
}