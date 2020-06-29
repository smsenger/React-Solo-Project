import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Container>
        <Row>
            <Col md="auto" id="row">
                <Card className="card" style={{border: '1px solid red'}}>
                <Card.Img className="image" variant="top" id="image" alt="image" src={img}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '25px', color: 'red' }}>{h2}: {brand}</Card.Title>
                    <div className="flex-buttons">
                    <Button style={{fontSize: '15px', backgroundColor: '#b6b7db', border: '1px solid red'}}className="button" variant="primary" id="" onClick={() => this.props.seeDetails(this.props.result)}>Details</Button>
                    <Button style={{fontSize: '15px', backgroundColor: '#b6b7db', border: '1px solid red'}} className="button2" variant="primary" id="" onClick={() => this.props.saveToList(this.props.result)}>Add to List</Button>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container> 
            </div>
        )
    }
}
