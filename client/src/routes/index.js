import {Switch} from "react-router-dom";
import MyRoute from "./MyRoute";

import Home from "../view/Home/index.js";
import Signup from "../view/Signup";
import Signin from "../view/Signin";
import Page404 from "../view/Page404";

export default function Routes() {

  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute exact path="/signup" component={Signup} />
      <MyRoute exact path="/signin" component={Signin} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}