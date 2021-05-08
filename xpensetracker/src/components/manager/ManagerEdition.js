import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import {Button, Form} from "react-bootstrap";

const ManagerEdition = ({manager, submitManager}) => {

    const [name, setName] = useState("")
    const [disableSubmit, setDisableSubmit] = useState(false)

    useEffect(() => {
        setName(manager.name)
    }, [manager])

    const onChangeName = (e) => {
        if (e.target.value !== '') {
            setDisableSubmit(false)
        } else {
            setDisableSubmit(true)
        }
        setName(e.target.value)
    }

    return(
        <Form className={"text-left"}>
            <Form.Group controlId="formManagerCreation">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => onChangeName(e)} placeholder={name} value={name}/>
            </Form.Group>
            <Button disabled={disableSubmit} onClick={() => submitManager({name: name})} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

ManagerEdition.propTypes = {
    manager: PropTypes.any,
    submitManager: PropTypes.func.isRequired
}
export default ManagerEdition