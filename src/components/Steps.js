import React from 'react'
import how from '../images/how.jpg'
import online from '../images/online.jpg'
import delivery from '../images/delivery.jpg'
import{
    CardGroup,
    Card,
}from 'react-bootstrap'

function Steps(){
    return(
<CardGroup>
  <Card className="grid-card">
  <Card.Img className="how-to-img" src={how} />
    <Card.Body>
      <Card.Title>Talk To Your Doctor</Card.Title>
      <Card.Text>
        Speak with your Doctor about setting up an account on their end.  Once they submit your 
        records and memeber ID number, all you have to do is create your account!
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="grid-card">
  <Card.Img className="how-to-img" src={online} />
    <Card.Body>
      <Card.Title>Order Everything Online</Card.Title>
      <Card.Text>
        You're just a few button clicks away!  Once your order is submitted, we take care of the rest. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="grid-card">
  <Card.Img className="how-to-img" src={delivery} />
    <Card.Body>
      <Card.Title>Delivered Right To Your Door</Card.Title>
      <Card.Text>
       Safe, discreate delivery right to your home.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    )
}


export default Steps;
