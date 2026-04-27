import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";
import Experiences from "./pages/Experiences";
import Diplomes from "./pages/Diplomes";

import "./css/Projets.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <Routes>
               <Route path="/" element={<App />} />
               <Route path="/projets" element={<Projets />} />
               <Route path="/projets/:id" element={<ProjetDetail />} />
               <Route path="/experiences/:id" element={<Experiences />} />
               <Route path="/diplomes/:id" element={<Diplomes />} />
            </Routes>
         </Router>
      </Provider>
   </React.StrictMode>,
);
