import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import CardGroup from "./components/cards";
import paginaPadres from "./components/pagina-padre";
import paginaEstudiante from "./components/pagina-estudiante";

function App() {
    return (
        <div className="App">
            <Router>
                <CardGroup />
                <Switch>
                    <Route path="/pagina-padre" component={paginaPadres} />
                    <Route path="/pagina-estudiante" component={paginaEstudiante}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
