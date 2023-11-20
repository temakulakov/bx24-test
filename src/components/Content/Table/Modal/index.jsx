import "./Modal.css";
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {testFormState} from "../../../../store";
import {Button, Modal} from "react-bootstrap";
import {headRowText, leftColText} from "../../../../store/data";



const ModalComponent = (props) => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useRecoilState(testFormState);
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
    return <>
        <div className={active[props.theme] === props.level + 1 ? "round active" : "round "} onClick={handleShow}>
        </div>
        <Modal show={show} onHide={handleHide} animation={false} size={"lg"}>
            <Modal.Header closeButton >
                {props.theme + 1 && props.level + 1 ? <Modal.Title>{leftColText[props.theme]} - {headRowText[props.level + 1]}</Modal.Title> : true}
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