import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";

const AlertMessage = ({success, message, setStatus}) =>{
    const [show, setShow] = useState(true);

    useEffect(() =>{
        const timerId = setTimeout(() =>{
            setShow(false);
            setStatus({});
        }, 3000);

        return () =>{
            clearTimeout(timerId);
        }
    }, []);

    if(!show || !success || !message){
        return null;
    }

    return (
        <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>
    );
}

export default AlertMessage;