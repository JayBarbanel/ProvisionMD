import React from 'react'
import './App.css';
import NavBar from './components/Nav'
import Main from './components/Main'
import How from './components/How'
import Steps from './components/Steps'
import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
    <div className="App">
   <NavBar/>
   <Main/>
   <How/>
   <Steps/>
    </div>

    </Router>
  );
}

export default App;
