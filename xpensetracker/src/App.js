import './App.css';
import React from "react";
import Dashboard from "./components/Dashboard";
import {HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Switch>
            <Route path={"/"} component={Dashboard}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
