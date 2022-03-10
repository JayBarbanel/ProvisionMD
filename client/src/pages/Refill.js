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
        <DROrder/>
        <Past/>
        </div>
        </>
    )
}

export default Refill;