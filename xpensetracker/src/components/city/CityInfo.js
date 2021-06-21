import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types"
import {getManagersInCity} from "../../services/ManagerService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CityInfo = ({city}) => {

    const [managers, setManagers] = useState([])

    useEffect(() => {
        async function getCityManagers() {
            await getManagersInCity(city.id).then(res => {
                    setManagers(res)
            }).catch(err => {
                console.log("Something went wrong")
                setManagers([])
            })
        }
        getCityManagers()
    }, [city.id])



    return(
        managers &&
            <Card className={"p-1"}>
                <Card.Title>
                    {city.name.toUpperCase()}
                </Card.Title>
                <Card.Body className={"text-left"}>
                    <Card.Text className={"text-justify"}>
                        {city.description}
                    </Card.Text>
                    <Row><Col>Managers:</Col></Row>
                    {managers.map(manager => (
                        <Row key={manager.id}>
                            <Col>{manager.name+"  "}</Col>
                        </Row>
                    ))}
                </Card.Body>
            </Card>
    )
}

CityInfo.propTypes = {
    city: PropTypes.any
}

export default CityInfo