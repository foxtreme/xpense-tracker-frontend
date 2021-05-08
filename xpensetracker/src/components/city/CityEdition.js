import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import {Button, Form} from "react-bootstrap";
import {COUNTRIES_EN} from "../../utils/Constants";

const CityEdition = ({city, submitCity}) => {

    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        setName(city.name)
        setCountry(city.country)
        setDescription(city.description)
    }, [city])

    const onChangeName = (e) => { setName(e.target.value) }
    const onChangeCountry = (e) => { setCountry(e.target.value) }
    const onChangeDescription = (e) => { setDescription(e.target.value) }

    const isButtonDisabled = () => {
        return name==='' && country === '' && description === ''
    }

    return(
        <Form className={"text-left"}>
            <Form.Group controlId="formCityName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => onChangeName(e)} placeholder="Enter the city name" value={name}/>
            </Form.Group>
            <Form.Group controlId="formCityCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" size="sm" custom onChange={(e) => onChangeCountry(e)} value={country}>
                    {COUNTRIES_EN.map(countryName => (
                        <option key={countryName}>{countryName}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCityDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} type="text" onChange={(e) => onChangeDescription(e)} placeholder="Enter a short description of the city" value={description}/>
            </Form.Group>
            <Button disabled={isButtonDisabled()} onClick={() => submitCity({name: name, country:country, description:description})} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

CityEdition.propTypes = {
    city: PropTypes.any,
    submitCity: PropTypes.func.isRequired
}
export default CityEdition