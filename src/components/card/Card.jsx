import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import card1 from "../../assets/img/card/card01.JPG"
import card2 from "../../assets/img/card/card02.JPG"
import card3 from "../../assets/img/card/card03.JPG"
export default function People() {
  return (
<>
<h3 style={{textAlign : 'center',marginTop : '50px'}}>Why People  Organi</h3>
    <CardGroup style={{marginTop: '50px'}}>
    <Card>
      <Card.Img  style={{backgroundColor : 'white',opacity: 0.6, position : 'relative'}} variant="top" src= {card1} />
      <div class="transbox" style={{position : 'absolute',}}>
        {/* <p style={{ textAlign : 'center',justifyContent : 'center'}}>Convenient & Quick</p> */}
      </div>
      <Card.Body>
        <Card.Title>Convenient & Quick</Card.Title>
        <Card.Text>
        No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your door.
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer> */}
    </Card>
    <Card>
      <Card.Img variant="top" src= {card2}  />
      <Card.Body>
        <Card.Title>Freshly Picked</Card.Title>
        <Card.Text>
        Our fresh produce is sourced every morning, you get the best from us.
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer> */}
    </Card>
    <Card>
      <Card.Img style={{backgroundColor : 'white',opacity: 0.6, position : 'relative'}} variant="top" src= {card3} />
      <Card.Body>
        <Card.Title>A wide range of Products</Card.Title>
        <Card.Text>
        With 4000+ Products to choose from, forget scouring those aisles for hours.
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer> */}
    </Card>
  </CardGroup>
  </>
  )
};
