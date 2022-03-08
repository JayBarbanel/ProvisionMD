import React from 'react'
import './App.css';
import Home from './pages/Home'
import Refill from './pages/Refill'


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>

    <Home/>
    
        </Router>

//     <Router>

// <Refill/>

//     </Router>
  )
}

export default App;
