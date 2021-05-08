import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomToast from "../CustomToast";
import {deleteExpense, getExpenses, postExpense, putExpense} from "../../services/ExpenseService";
import ExpenseCreation from "./ExpenseCreation";
import ExpenseEdition from "./ExpenseEdition";

const ExpenseDashboard = () => {

    const [displayCreateForm, setDisplayCreateForm] = useState(false)
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [expenseList, setExpenseList] = useState([])
    const [selectedExpense, setSelectedExpense] = useState(null)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        getAllExpenses()
    }, [])


    const onClickNewExpense = () => {
        setDisplayCreateForm(true)
        setDisplayEditForm(false)
    }

    const onClickEditExpense = (expense) => {
        setDisplayEditForm(true)
        setDisplayCreateForm(false)
        setSelectedExpense(expense)
    }

    async function onClickSubmitNewExpense(expense){
        console.log("expense",expense)
        await postExpense(expense).then(res => {
            getAllExpenses()
            setDisplayCreateForm(false)
            setToastMessage("Expense created successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function onClickSubmitExistingExpense(expense){
        await putExpense(expense, selectedExpense.id).then(res => {
            getAllExpenses()
            setDisplayEditForm(false)
            setToastMessage("Expense edited successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function getAllExpenses() {
        await getExpenses().then(res => {
            setExpenseList(res)
        }).catch(err => {
            setExpenseList([])
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function deleteSingleExpense(id) {
        await deleteExpense(id).then(res => {
            getAllExpenses()
            setToastMessage("Expense deleted successfully!")
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
                            <th>Expense</th>
                            <th>Type</th>
                            <th>Frequency</th>
                            <th>Min Value</th>
                            <th>Max Value</th>
                            <th className={"text-right"}><Button onClick={()=> onClickNewExpense()} size={"sm"} variant="success">Add</Button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {expenseList.length>0 && expenseList.map(expense => (
                            <tr key={expense.id}>
                                <td>{expense.name}</td>
                                <td>{expense.type}</td>
                                <td>{expense.frequency}</td>
                                <td>{expense.minValue}</td>
                                <td>{expense.maxValue}</td>
                                <td className={"text-right"}>
                                    <ButtonGroup aria-label="expense-actions">
                                        <Button size={"sm"} variant="outline-info" onClick={() => onClickEditExpense(expense)}>Edit</Button>
                                        <Button size={"sm"} variant="outline-danger" onClick={() => deleteSingleExpense(expense.id)}>Remove</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={5} lg={5}>
                    { displayCreateForm &&  <ExpenseCreation submitExpense={onClickSubmitNewExpense}/>}
                    { displayEditForm &&  <ExpenseEdition expense={selectedExpense} submitExpense={onClickSubmitExistingExpense}/>}
                    { showToast && <CustomToast message={toastMessage} showToast={showToast} setShowToast={setShowToast}/>}
                </Col>
            </Row>
        </Col>
    )
}

export default ExpenseDashboard