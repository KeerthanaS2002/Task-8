/*import React from 'react';
import SlamBook from './SlamBook';
function App() {
  return (
    <div className="App">
      <SlamBook />
    </div>
  );
}
export default App;*/

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;


