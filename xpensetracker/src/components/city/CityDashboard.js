import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomToast from "../CustomToast";
import {deleteCity, getCities, postCity, putCity} from "../../services/CityService";
import CityCreation from "./CityCreation";
import CityEdition from "./CityEdition";

const CityDashboard = () => {

    const [displayCreateForm, setDisplayCreateForm] = useState(false)
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [cityList, setCityList] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        getAllCities()
    }, [])


    const onClickNewCity = () => {
        setDisplayCreateForm(true)
        setDisplayEditForm(false)
    }

    const onClickEditCity = (city) => {
        setDisplayCreateForm(false)
        setDisplayEditForm(true)
        setSelectedCity(city)
    }

    async function onClickSubmitNewCity(city){
        await postCity(city).then(res => {
            getAllCities()
            setDisplayCreateForm(false)
            setToastMessage("City created successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function onClickSubmitExistingCity(city){
        await putCity(city, selectedCity.id).then(res => {
            getAllCities()
            setDisplayEditForm(false)
            setToastMessage("City edited successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function getAllCities() {
        await getCities().then(res => {
            setCityList(res)
        }).catch(err => {
            setCityList([])
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function deleteSingleCity(id) {
        await deleteCity(id).then(res => {
            getAllCities()
            setToastMessage("City deleted successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    return(
        <Col md={12} lg={12}>
            <Row>
                <Col md={7} lg={7}>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>City</th>
                            <th>Country</th>
                            <th>Description</th>
                            <th className={"text-right"}><Button onClick={()=> onClickNewCity()} size={"sm"} variant="success">Add</Button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cityList.length>0 && cityList.map(city => (
                            <tr key={city.id}>
                                <td>{city.name}</td>
                                <td>{city.country}</td>
                                <td>{city.description}</td>
                                <td className={"text-right"}>
                                    <ButtonGroup aria-label="city-actions">
                                        <Button size={"sm"} variant="outline-info" onClick={() => onClickEditCity(city)}>Edit</Button>
                                        <Button size={"sm"} variant="outline-danger" onClick={() => deleteSingleCity(city.id)}>Remove</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={5} lg={5}>
                    { displayCreateForm &&  <CityCreation submitCity={onClickSubmitNewCity}/>}
                    { displayEditForm &&  <CityEdition city={selectedCity} submitCity={onClickSubmitExistingCity}/>}
                    { showToast && <CustomToast message={toastMessage} showToast={showToast} setShowToast={setShowToast}/>}
                </Col>
            </Row>
        </Col>
    )
}

export default CityDashboard