import React from 'react'
import doc from '../images/doc.jpg'
import{
    CardGroup,
    Card,
    
}from 'react-bootstrap'


function How (){
    return(
        <CardGroup>
  <Card className="grid-card">
    <Card.Body>
      <Card.Title>
          <div className="who-we">
              <h2>Who We Are</h2>
          </div>
      </Card.Title>
      <Card.Text>
          <div className="wwa">
        Anything that needs medical attnetion can be stressfull, inuding ordering perscriptions.<br/>
        At ProvisionsMD, our goal is to make the experiance easier and less of a hassle. <br/>
        One approved by your doctor and your insurance company, all you have to do is sign in, <br/>
        check off the medications you want to refill, and then we take care of the rest.
        </div>
       
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="grid-card">
    <Card.Img className="how-to-img" src={doc} />
  </Card>
</CardGroup>
    )
}

export default How;