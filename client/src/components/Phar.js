import React from 'react'
import Pharm from '../images/phar.jpg'

import{
    Card, 
}from 'react-bootstrap'

function Phar (){
    return (

        <Card className="pharm">
        <Card.Img variant="top" src={Pharm}/>
      </Card>
    )
}

export default Phar;