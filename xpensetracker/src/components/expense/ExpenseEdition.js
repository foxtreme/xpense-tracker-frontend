import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import {Button, Form} from "react-bootstrap";

const ExpenseEdition = ({expense, submitExpense}) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("Moderate")
    const [frequency, setFrequency] = useState("Monthly")
    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")

    const onChangeName = (e) => { setName(e.target.value) }
    const onChangeType = (e) => { setType(e.target.value) }
    const onChangeFrequency = (e) => { setFrequency(e.target.value) }
    const onChangeMinValue = (e) => { setMinValue(e.target.value) }
    const onChangeMaxValue = (e) => { setMaxValue(e.target.value) }

    const isButtonDisabled = () => {
        return name==='' && type === '' && frequency === '' && minValue === '' && maxValue === ''
    }

    useEffect(() => {
        setName(expense.name)
        setType(expense.type)
        setFrequency(expense.frequency)
        setMinValue(expense.minValue)
        setMaxValue(expense.maxValue)
    }, [expense])

    return(
        <Form className={"text-left"}>
            <Form.Group controlId="formExpenseName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => onChangeName(e)} placeholder="Enter the expense name" value={name}/>
            </Form.Group>
            <Form.Group controlId="formExpenseType">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" size="sm" custom onChange={(e) => onChangeType(e)} value={type}>
                    <option value="Critical" >Critical</option>
                    <option value="Major">Major</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Minor">Minor</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formExpenseFrequency">
                <Form.Label>Frequency</Form.Label>
                <Form.Control as="select" size="sm" custom onChange={(e) => onChangeFrequency(e)} value={frequency}>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formExpenseMinValue">
                <Form.Label>Minimum Value</Form.Label>
                <Form.Control type="number" onChange={(e) => onChangeMinValue(e)} placeholder="Enter your estimate for the lowest value" value={minValue}/>
            </Form.Group>
            <Form.Group controlId="formExpenseMaxValue">
                <Form.Label>Maximum Value</Form.Label>
                <Form.Control type="number" onChange={(e) => onChangeMaxValue(e)} placeholder="Enter your estimate for the highest value" value={maxValue}/>
            </Form.Group>
            <Button disabled={isButtonDisabled()} onClick={() => submitExpense({name: name, type:type, frequency:frequency, minValue: minValue, maxValue:maxValue})} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

ExpenseEdition.propTypes = {
    expense: PropTypes.any,
    submitExpense: PropTypes.func.isRequired
}
export default ExpenseEdition