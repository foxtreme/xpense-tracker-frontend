import React, {useEffect, useState} from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card";
import {getManagersWithExpenses} from "../../services/ManagerService";

const ManagerSummary = ({managerList}) => {

    const [managers, setManagers] = useState([])

    useEffect(() => {
        async function getExpensesQuantity(){
            await getManagersWithExpenses().then(res => {
                setManagers(res)
            }).catch(err => {
                console.log("Something went wrong")
            })
        }
        getExpensesQuantity()
    }, [managerList])

    return(
        managers &&
        <Card className={"p-1 mb-1"}>
            <Card.Body className={"text-left"}>
                {managers.map(managerExpense => (
                    `${managerExpense[0]} has ${managerExpense[1]} expenses assigned`
                ))}
            </Card.Body>
        </Card>
    )
}

ManagerSummary.propTypes = {
    managerList: PropTypes.array,
}

export default ManagerSummary