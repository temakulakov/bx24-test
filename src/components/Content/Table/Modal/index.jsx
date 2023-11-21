import "./Modal.css";
import React, {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {testFormState} from "../../../../store";
import {Button, Modal} from "react-bootstrap";
import {headRowText, leftColText} from "../../../../store/data";


const ModalComponent = (props) => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useRecoilState(testFormState);
    const refSetTimeout = useRef();
    const [hover, setHover] = useState(false)
    const handleShow = () => {
        setShow(true);
    };
    const handleHide = () => {
        setShow(false);
    };
    const activeButtonClick = () => {
        setActive(() => active.map((el, index) => index === props.theme ? props.level + 1 : el));
        setShow(false);
    };

    const onMouseEnterHandler = () => {
        setHover(true);
        refSetTimeout.current = setTimeout(() => {
            handleShow()
        }, 500);
    }

    const rollerView = () => hover || show ? active[props.theme] === props.level + 1 ? {strokeDasharray: "1.1, 1", stroke: "white",} : {strokeDasharray: "1.1, 1"} : {strokeDasharray: "0, 1"}


    const onMouseLeaveHandler = () => {
        setHover(false);

        clearTimeout(refSetTimeout.current);
        // handleHide();
    }

    useEffect(() => {
        localStorage.setItem('testFormState', JSON.stringify(active));
    }, [active]);

    return <>
        {/*<div className={active[props.theme] === props.level + 1 ? "round active" : "round "} onClick={handleShow}*/}
        {/*     onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>*/}
        {/*</div>*/}
        { active[props.theme] === props.level + 1 ? <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" onClick={handleShow}
                                                         onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <circle className="checkmark__circle" cx="25" cy="25" r="25" fill="none"/>
            <circle cx="25" cy="25" r="25" pathLength="1" className="roller-indicator" style={rollerView()}></circle>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg> : true}
        <svg  className={"pr"} width="50" height="50" viewBox="0 0 100 100" onClick={handleShow}
             onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>

                <circle cx="50" cy="50" r="30" pathLength="1" className="roller-bg">
                </circle>
            <circle cx="50" cy="50" r="30" pathLength="1" className="roller-indicator" style={rollerView()}></circle>
        </svg>
        <Modal show={show} onHide={handleHide} animation={false} size={"lg"}>
            <Modal.Header closeButton>
                {props.theme + 1 && props.level + 1 ?
                    <Modal.Title>{leftColText[props.theme]} - {headRowText[props.level + 1]}</Modal.Title> : true}
            </Modal.Header>
            {props.children ? <Modal.Body>{props.children}</Modal.Body> : true}
            <Modal.Footer>
                <div className={"navigation"}>
                    <Button variant="outline-secondary" onClick={handleHide}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={activeButtonClick}>
                        Выбрать
                    </Button>
                    <div style={{width: "80px"}}></div>
                </div>
            </Modal.Footer>
        </Modal>
    </>
};

export default ModalComponent;