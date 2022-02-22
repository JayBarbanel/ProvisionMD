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
          <div className="how-to">
              <h2>How It Works</h2>
          </div>
      </Card.Title>
      <Card.Text>
          <div className="instruction">
        When you're in a rush and need to fill your perscription, <br/>
        being on hold can be a pain.  With ProvisionMD, all you need to do is <br/>
        sign up with your doctor, create an account and re-order online!
        </div>
        <div>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
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