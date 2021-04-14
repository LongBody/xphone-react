import React from 'react';
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import './App.scss'
import Routes from './routes/index'

function App() {
  return (
    // <HashRouter basename='/'>
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
      </div>
    </BrowserRouter>
    // {/* </HashRouter> */}

  );
}

export default App;
