import React from 'react'
import './App.css';
import NavBar from './components/Nav'
import Main from './components/Main'
import How from './components/How'
import Steps from './components/Steps'
import StepsHeader from './components/StepsHeader'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
    <div className="App">
   <NavBar/>
   <Main/>
   <How/>
   <StepsHeader/>
   <Steps/>
   <Footer/>
    </div>
    </Route>

    <Route exact path="/Order">

    </Route>

    </Router>
  );
}

export default App;
