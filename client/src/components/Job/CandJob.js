import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CandJob() {
  return (
    <Row>
                <Col>
                <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>
  )
}

export default CandJob