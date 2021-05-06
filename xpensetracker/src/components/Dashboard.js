import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const Dashboard = () => {

    const [imageHolder, setImageHolder] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEamaqOcV0D-SFhgYSw0m3yRxzz_1-voINA&usqp=CAU")
    const [footerLink, setFooterLink] = useState("https://github.com/foxtreme/xpense-tracker-frontend")
    return(
        <Container>
            <Row className={"p-3"}>
                <Col className={"text-right"} md={8} lg={9}>Logged in as:</Col>
                <Col className={"text-right"} md={2} lg={2}>
                    <Button variant="outline-secondary">Log Out</Button>{' '}
                </Col>
                <Col className={"text-right"} md={2} lg={1}>
                    <ButtonGroup aria-label="localization">
                        <Button variant="outline-info">En</Button>
                        <Button variant="outline-info">Fr</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Xpensetracker</h1>
                            <p>
                                A lightweight tool for managing expenses
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col sm={4} md={4} lg={4}>
                    <Card style={{ width: '18rem', margin: 'auto 30px' }}>
                        <Card.Img variant="top" src={imageHolder} />
                        <Card.Body>
                            <Card.Title>Cities</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <Card style={{ width: '18rem', margin: 'auto 30px' }}>
                        <Card.Img variant="top" src={imageHolder} />
                        <Card.Body>
                            <Card.Title>Managers</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Col>
                <Col sm={4} md={4} lg={4}>
                    <Card style={{ width: '18rem', margin: 'auto 30px' }}>
                        <Card.Img variant="top" src={imageHolder} />
                        <Card.Body>
                            <Card.Title>Expenses</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className={"footer"} sm={12} md={12} lg={12}>
                    Code can be found <a href={footerLink} rel="noreferrer" target={"_blank"}> here</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard