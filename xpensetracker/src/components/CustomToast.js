import React, {useEffect} from "react";
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card";
import {delay} from "../utils/Common";
import Col from "react-bootstrap/Col";

const CustomToast = ({message, showToast, setShowToast}) => {

    useEffect(() => {
        const autoHide = async () => {
            await delay(3000);
            setShowToast(false)
        };
        autoHide()
    }, [showToast, setShowToast])

    return(
        <Col sm={12} md={12} lg={12}>
            { showToast && <Card body className={"text-center bg-info text-light"}>{message}</Card>}
        </Col>
    )
}

CustomToast.propTypes = {
    message: PropTypes.string,
    setShowToast: PropTypes.func,
    showToast: PropTypes.bool,
}

export default CustomToast