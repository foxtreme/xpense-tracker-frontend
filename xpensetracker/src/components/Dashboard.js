import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {FOOTER_LINK} from "../utils/Constants";
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";
import CityDashboard from "./city/CityDashboard";
import ManagerDashboard from "./manager/ManagerDashboard";
import ExpenseDashboard from "./expense/ExpenseDashboard";
import NotFound from "./NotFound";
import Home from "./Home";
import Card from "react-bootstrap/Card";
import managers from "../resources/managers.jpg"
import cities from "../resources/cities.jpg"
import expenses from "../resources/expenses.jpg"

const Dashboard = () => {

    return(
        <HashRouter>
            <Container className={"dashboard"}>
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
                <Row className={"p-0"}>
                    <Col xs={12} sm={12} md={12} lg={4} className={" w-75"}>
                        <NavLink to={"/cities"}>
                            <Card className="bg-dark text-white">
                                <Card.Img src={cities} alt="Card image" className={"menu-img"}/>
                                <Card.ImgOverlay>
                                    <Card.Title className={"menu-text"}>Cities</Card.Title>
                                    <Card.Text className={"menu-text"}>
                                        Register a city and begin tracking all your expenses in it!
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={" w-75"}>
                        <NavLink to={"/managers"}>
                            <Card className="bg-dark text-white">
                                <Card.Img src={managers} alt="Card image" className={"menu-img"}/>
                                <Card.ImgOverlay>
                                    <Card.Title className={"menu-text"}>Managers</Card.Title>
                                    <Card.Text className={"menu-text"}>
                                        The folks in charge of paying for the expenses!
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className={" w-75"}>
                        <NavLink to={"/expenses"}>
                            <Card className="bg-dark text-white">
                                <Card.Img src={expenses} alt="Card image" className={"menu-img"}/>
                                <Card.ImgOverlay>
                                    <Card.Title className={"menu-text"}>Expenses</Card.Title>
                                    <Card.Text className={"menu-text"}>
                                        Everything and anything that is an expense for you!
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>
                <Row className={"main-content py-4"}>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/cities"} component={CityDashboard}/>
                        <Route path={"/managers"} component={ManagerDashboard}/>
                        <Route path={"/expenses"} component={ExpenseDashboard}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Row>
                <Row>
                    <Col className={"footer"} sm={12} md={12} lg={12}>
                        Code can be found <a href={FOOTER_LINK} rel="noreferrer" target={"_blank"}> here</a>
                    </Col>
                </Row>
            </Container>
        </HashRouter>
    )
}

export default Dashboard