import React from 'react'
import {
    Card,
    CardGroup,
} from 'react-bootstrap'
import ProAir from '../images/ProAir.jpg'
import Epi from '../images/Epi.jpg'
import Flo from '../images/Flo.png'

function Past(){
    return (
        <>
  
<CardGroup className="Past">
<h4>Your Recently Ordered</h4>
  <Card>
    <Card.Img variant="top" src={ProAir} />
    <Card.Body>
      <Card.Title>ProAir HFA Albuterol Inhaler</Card.Title>
      <Card.Text>
    text
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Epi} />
    <Card.Body>
      <Card.Title>Mylan Epinephrine Injection, 2-Units</Card.Title>
      <Card.Text>
       text
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Flo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        text
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</>
    )
}

export default Past;