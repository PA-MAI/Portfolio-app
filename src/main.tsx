import React from "react";  
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";
import Experiences from "./pages/Experiences";
import Diplomes from "./pages/Diplomes";

import './css/Projets.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  //  <React.StrictMode>
  //    <BrowserRouter>
  //      <Routes>
  //        <Route path="/" element={<App />} />
  //        <Route path="/projets" element={<Projets />} />
  //        <Route path="/projets/:id" element={<ProjetDetail />} />
  //        <Route path="/experiences/:id" element={<Experiences />} />
  //        <Route path="/diplomes/:id" element={<Diplomes />} />
  //      </Routes>
  //    </BrowserRouter>
  //  </React.StrictMode>
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/projets/:id" element={<ProjetDetail />} />
            <Route path="/experiences/:id" element={<Experiences />} />
            <Route path="/diplomes/:id" element={<Diplomes />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
//   public render(): React.ReactElement<IVacationRequestsProps> {
//     return (
//       <div className={styles.vacationRequests}>
//         <HashRouter>
//           <Route path="/" exact component={VacationsRequestList}></Route>
//         </HashRouter>
//       </div>
//     );
//   }