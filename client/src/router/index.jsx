import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Home";
import Streaming from "../pages/VideoDetail";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/stream/:id">
        <Streaming />
      </Route>
    </Switch>
  );
}
