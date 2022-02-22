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
        <div id="steps">
        <h3>Steps to take</h3>
        </div>
        <div className="list">
          <ul id="list">
            <li>Talk to your doctor about siging up.</li> <br/>
            <li>Easily run all financials through your insurance.</li><br/>
            <li>Get online, sign in and have refill your medications.</li><br/>
            <li>Your order will be delivered right to your home.</li><br/>
          </ul>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="how-to-img" src={how} />
  </Card>
</CardGroup>
    )
}

export default How;