import React from 'react'
import main from '../images/main.jpg'

import{
    Card, 
}from 'react-bootstrap'

function Main (){
    return (
        <Card>
        <Card.Img variant="top" src={main} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Main;