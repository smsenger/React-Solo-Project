import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './NewsResults.css'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col md="auto" id="row">
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="card-title">{this.props.article.title}</Card.Title>
                                <Card.Title className="card-name">{this.props.article.source.name}</Card.Title>
                                <Card.Text className="card-body">{this.props.article.description}</Card.Text>
                                <Card.Text className="card-body">{this.props.article.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}