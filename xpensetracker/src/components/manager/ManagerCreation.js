import React, {useState} from "react";
import PropTypes from "prop-types"
import {Button, Form} from "react-bootstrap";

const ManagerCreation = ({submitManager}) => {

    const [name, setName] = useState("")

    const onChangeName = (e) => {
        if (e.target.value !== '') {

        }
        setName(e.target.value)
    }

    return(
        <Form className={"text-left"}>
            <Form.Group controlId="formManagerCreation">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => onChangeName(e)} placeholder="Enter your name" value={name}/>
            </Form.Group>
            <Button onClick={() => submitManager({name: name})} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

ManagerCreation.propTypes = {
    submitManager: PropTypes.func.isRequired
}
export default ManagerCreation