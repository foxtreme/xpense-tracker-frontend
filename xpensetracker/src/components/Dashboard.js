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
                <Row className={"p-3"}>
                    <Col className={"p-0 btn-menu"}>
                        <NavLink to={"/cities"}>
                            <Button variant={"outline-primary"} block>Cities</Button>
                        </NavLink>
                    </Col>
                    <Col className={"p-0 btn-menu"}>
                        <NavLink to={"/managers"}>
                            <Button variant={"outline-primary"} block>Managers</Button>
                        </NavLink>
                    </Col>
                    <Col className={"p-0 btn-menu"}>
                        <NavLink to={"/expenses"}>
                            <Button variant={"outline-primary"} block>Expenses</Button>
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