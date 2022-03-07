import React from 'react'
import './App.css';
import Home from './pages/Home'

import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
    
    <div className="App">
  <Home/>
    </div>
   


    </Router>
  );
}

export default App;
