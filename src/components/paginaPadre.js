import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Navbar from "./navbar";


const paginaPadres = () =>{
    return(
        <div>
            <Router>
                <Navbar />
                {/* <Routes> Wrap Routes around your Route components */}
                    {/* <Route path="/" element={<CardGroup />} /> Use element prop instead of component */}
                    {/* <Route path="/pagina-padre" component={paginaPadres} /> */}
                    {/* <Route path="/pagina-estudiante" component={paginaEstudiante} /> */}
                {/* </Routes> */}
            </Router>
        </div>
    )
}

export default paginaPadres;