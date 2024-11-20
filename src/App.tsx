// import Labs from "./Labs";
// import Kanbas from "./Kanbas";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// export default function App() {
//  return (
//   <HashRouter>
//    <div>
//     <Routes>
//      <Route path="/" element={<Navigate to="Kanbas"/>}/>
//      <Route path="/" element={<Navigate to="Labs" />} />
//      <Route path="/Labs/*" element={<Labs />} />
//      <Route path="/Kanbas/*" element={<Kanbas />} />
//     </Routes>
//    </div>
//   </HashRouter>
// );
// }


// 
import React from 'react';
import './App.css';
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from './Kanbas';
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          {/* Redirect "/" to "/Kanbas" */}
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          
          {/* Labs routes */}
          <Route path="/Labs/*" element={<Labs />} />
          
          {/* Kanbas routes */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
}

export default App;
