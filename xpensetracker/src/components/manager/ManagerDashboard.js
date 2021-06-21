import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {deleteManager, getManagers, postManager, putManager} from "../../services/ManagerService";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ManagerCreation from "./ManagerCreation";
import CustomToast from "../CustomToast";
import ManagerEdition from "./ManagerEdition";
import ManagerSummary from "./ManagerSummary";

const ManagerDashboard = () => {

    const [displayCreateForm, setDisplayCreateForm] = useState(false)
    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [managerList, setManagerList] = useState([])
    const [selectedManager, setSelectedManager] = useState(null)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        getAllManagers()
    }, [])


    const onClickNewManager = () => {
        setDisplayCreateForm(true)
        setDisplayEditForm(false)
    }

    const onClickEditManager = (manager) => {
        setDisplayEditForm(true)
        setDisplayCreateForm(false)
        setSelectedManager(manager)
    }

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

    async function onClickSubmitExistingManager(manager){
        await putManager(manager, selectedManager.id).then(res => {
            getAllManagers()
            setDisplayEditForm(false)
            setToastMessage("Manager edited successfully!")
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
                <Col md={7} lg={7}>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>Manager</th>
                            <th className={"text-right"}><Button onClick={()=> onClickNewManager()} size={"sm"} variant="success">Add</Button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {managerList.length>0 && managerList.map(manager => (
                            <tr key={manager.id}>
                                <td>
                                    {manager.name}
                                </td>
                                <td className={"text-right"}>
                                    <ButtonGroup aria-label="manager-actions">
                                        <Button size={"sm"} variant="outline-info" onClick={() => onClickEditManager(manager)}>Edit</Button>
                                        <Button size={"sm"} variant="outline-danger" onClick={() => deleteSingleManager(manager.id)}>Remove</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={5} lg={5}>
                    <ManagerSummary managerList={managerList}/>
                    { displayCreateForm &&  <ManagerCreation submitManager={onClickSubmitNewManager}/>}
                    { displayEditForm &&  <ManagerEdition manager={selectedManager} submitManager={onClickSubmitExistingManager}/>}
                    { showToast && <CustomToast message={toastMessage} showToast={showToast} setShowToast={setShowToast}/>}
                </Col>
            </Row>
        </Col>
    )
}

export default ManagerDashboard