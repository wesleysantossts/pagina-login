import {Switch, Route} from "react-router-dom";

import Signup from "../view/Signup";
import Page404 from "../view/Page404";

export default function Routes() {
  return (
    <Switch>
      <Route path="/signup" component={Signup}/>
      <Route path="*" component={Page404}/>
    </Switch>
  );
}