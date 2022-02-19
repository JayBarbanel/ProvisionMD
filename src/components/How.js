import React from 'react'
import how from '../images/how.jpg'
import{
    CardGroup,
    Card,
    
}from 'react-bootstrap'


function How (){
    return(
        <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>How It Works</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={how} />

  </Card>
</CardGroup>
    )
}

export default How;