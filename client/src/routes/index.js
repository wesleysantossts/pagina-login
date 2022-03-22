import {Switch} from "react-router-dom";
import MyRoute from "./MyRoute";

import Signup from "../view/Signup";
import Page404 from "../view/Page404";

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/signup" component={Signup} /*isClosed*/ />
      <MyRoute path="*" component={Page404}/>
    </Switch>
  );
}