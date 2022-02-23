import React from 'react'
import './App.css';
import NavBar from './components/Nav'
import Main from './components/Main'
import How from './components/How'
import Steps from './components/Steps'
import StepsHeader from './components/StepsHeader'
import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
    <div className="App">
   <NavBar/>
   <Main/>
   <How/>
   <StepsHeader/>
   <Steps/>
    </div>

    </Router>
  );
}

export default App;
