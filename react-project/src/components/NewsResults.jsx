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
                    <Row style={{ margin: 'auto' }}>
                        <Col md="auto" id="row">
                            <Card className="card" style={{ border: '2px solid #1dc4fd', marginTop: '15px' }}>
                                <Card.Img variant="top" className="news-image" src={this.props.article.urlToImage} />
                                <Card.Body>
                                    <Card.Title className="card-title" style={{ border: 'none' }}>{this.props.article.title}</Card.Title>
                                    <Card.Title className="card-name" style={{ border: 'none' }}>{this.props.article.source.name}</Card.Title>
                                    <Card.Text className="card-body" style={{ border: 'none' }}>{this.props.article.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}