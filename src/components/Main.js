import React from 'react'
import main from '../images/main.jpg'

import{
    Card, 
}from 'react-bootstrap'

function Main (){
    return (
        <Card>
            <div className="head-text">
        <Card.Img variant="top" src={main}/>
        <div className="text-on-image">
        <h1 className="welcome">Welcome!</h1>
        <p className="text-one">The Simplest Way to Saftley and Easily Refll Your Subscriptions.</p>
        </div>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    )
}

export default Main;