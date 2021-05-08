import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {deleteManager, getManagers, postManager} from "../../services/ManagerService";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ManagerCreation from "./ManagerCreation";
import CustomToast from "../CustomToast";

const ManagerDashboard = () => {

    const [managerList, setManagerList] = useState([])
    const [displayCreateForm, setDisplayCreateForm] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        getAllManagers()
    }, [])


    const onClickNewManager = () => { setDisplayCreateForm(true) }

    async function onClickSubmitNewManager(manager){
        await postManager(manager).then(res => {
            getAllManagers()
            setDisplayCreateForm(false)
            setToastMessage("Manager created successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function getAllManagers() {
        await getManagers().then(res => {
            setManagerList(res)
        }).catch(err => {
            setManagerList([])
            setToastMessage(err)
            setShowToast(true)
        })
    }

    async function deleteSingleManager(id) {
        await deleteManager(id).then(res => {
            getAllManagers()
            setToastMessage("Manager deleted successfully!")
            setShowToast(true)
        }).catch(err => {
            setToastMessage(err)
            setShowToast(true)
        })
    }

    return(
        <Col md={12} lg={12}>
            <Row>
                <CustomToast message={toastMessage} showToast={showToast} setShowToast={setShowToast}/>
            </Row>
            <Row>
                <Col md={5} lg={5}>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>Manager</th>
                            <th className={"text-right"}><Button onClick={()=> onClickNewManager()} size={"sm"} variant="success">New Manager</Button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {managerList.map(manager => (
                            <tr key={manager.id}>
                                <td>
                                    {manager.name}
                                </td>
                                <td className={"text-right"}>
                                    <ButtonGroup aria-label="manager-actions">
                                        <Button size={"sm"} variant="outline-info">Edit</Button>
                                        <Button size={"sm"} variant="outline-danger" onClick={() => deleteSingleManager(manager.id)}>Remove</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={7} lg={7}>
                    { displayCreateForm &&  <ManagerCreation submitManager={onClickSubmitNewManager}/>}
                </Col>
            </Row>
        </Col>
    )
}

export default ManagerDashboard