import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsResults.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import './NewsResults.css'

export default class SearchResults extends Component {

    render() {
        return (
            <>
                <Container>
                    <Row className="rowMargins">
                        <Col md="auto" id="row">
                            <Card className="card" style={{ border: '2px solid #1dc4fd', marginTop: '25px' }}>
                                <Card.Img variant="top" className="news-image" src={this.props.article.image} />
                                <Card.Body>
                                    <Card.Title className="card-title" style={{ border: 'none' }}>{this.props.article.title}</Card.Title>
                                    <Card.Title className="card-name" style={{ border: 'none' }}>{this.props.article.source.name}</Card.Title>
                                    <Card.Text className="card-body" style={{ border: 'none' }}>{this.props.article.description}</Card.Text>
                                    <Button className="card-body" style={{ border: 'none' }} type="submit" href={this.props.article.url}>Click here for full article</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}