import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import cities from "../resources/cities.jpg"
import expenses from "../resources/expenses.jpg"
import managers from "../resources/managers.jpg"
import {FOOTER_LINK} from "../utils/Constants";

const Dashboard = () => {

    const onClickTest = () => {

    }

    return(
        <Container>
            <Row className={"p-3"}>
                <Col className={"text-right"} md={9} lg={9}>Logged in as:</Col>
                <Col className={"text-right p-0"} md={3} lg={3}>
                    <ButtonGroup aria-label="localization">
                        <Button variant="outline-info" size={"sm"}>En</Button>
                        <Button variant="outline-info" size={"sm"}>Fr</Button>
                        <Button variant="outline-info" size={"sm"}>Log out</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron fluid className={'banner'}>
                        <Container>
                            <h1>Xpensetracker</h1>
                            <h4>
                                A lightweight tool for managing expenses
                            </h4>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
            <Row className={"main-container"}>
                <Col sm={4} md={4} lg={4}>
                    <Card className={"dashboard-card"}>
                        <Card.Img variant="top" src={cities}  width="100" height="200"/>
                        <Card.Body>
                            <Card.Title>Cities</Card.Title>
                            <Card.Text>
                                Register a City and begin tracking all your expenses in it!
                            </Card.Text>
                            <Button onClick={() => onClickTest()} variant="primary">
                                Go to my cities
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <Card className={"dashboard-card"}>
                        <Card.Img variant="top" src={managers} width="100" height="200"/>
                        <Card.Body>
                            <Card.Title>Managers</Card.Title>
                            <Card.Text>
                                The folks in charge of paying for the expenses!
                            </Card.Text>
                            <Button variant="primary">Go to my managers</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <Card className={"dashboard-card"}>
                        <Card.Img variant="top" src={expenses} width="100" height="200"/>
                        <Card.Body>
                            <Card.Title>Expenses</Card.Title>
                            <Card.Text>
                                Everything and anything that is an expense for you!
                            </Card.Text>
                            <Button variant="primary">Go to my expenses</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className={"footer"} sm={12} md={12} lg={12}>
                    Code can be found <a href={FOOTER_LINK} rel="noreferrer" target={"_blank"}> here</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard