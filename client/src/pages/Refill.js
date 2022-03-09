import React from 'react'
import '../App.css'
import RefillHeader from '../components/RefillHeader'
import Past from '../components/Past'
import DROrder from '../components/DROrder'
import Phar from '../components/Phar'



function Refill(){
    return (
        <>
        <RefillHeader/>
       <Phar/>
        <div className="rowC">
        <Past/>
        <DROrder/>
        </div>
        </>
    )
}

export default Refill;