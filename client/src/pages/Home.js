import React from 'react'
import '../App.css'
import NavBar from '../components/Nav'
import Main from '../components/Main'
import How from '../components/How'
import Steps from '../components/Steps'
import StepsHeader from '../components/StepsHeader'
import Footer from '../components/Footer'

function Home(){
    return(
   <div className="App">
   <NavBar/>
   <Main/>
   <How/>
   <StepsHeader/>
   <Steps/>
   <Footer/>
    </div>
    )
}

export default Home;