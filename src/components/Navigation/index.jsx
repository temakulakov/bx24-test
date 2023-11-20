import "./Navigation.css"
import {useRecoilState, useSetRecoilState} from "recoil";
import {inputFormState, stepFormState, testFormErrorState, testFormState} from "../../store";
import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";

import { capitalize } from "lodash";
import {stringify} from "uuid";

const Navigation = () => {
    const [ show, setShow ] = useState(false)

    const [stepState, setStepState] = useRecoilState(stepFormState);
    const [fioString, setFioString] = useRecoilState(inputFormState);
    const [testForm, setTestForm] = useRecoilState(testFormState);
    const [testFormError, setTestFormError] = useRecoilState(testFormErrorState)

    const backPage = () =>
        setStepState((state) => state - 1);
    const checkInputError = () => {
        let error = 0
        error += fioString.fio.split(' ').length < 2 ? 1 : 0;
        error += fioString.state.length < 3 ? 2 : 0;
        return error;
    }
    const enterFioClick = () => {
        const error = checkInputError();

        if (error > 0) {
            setFioString(() => {
                return {
                    error: error,
                    state: fioString.state,
                    fio: fioString.fio,
                }});
            return 0;
        }
        setStepState((state) => state + 1);
        setFioString(() => {
            return {
                error: error,
                state: fioString.state[0].toUpperCase() + fioString.state.slice(1),
                fio: fioString.fio?.split(' ').map((word) => capitalize(word)).join(' ')
        }});

    }
    const handleShow = () => {
        let errorss = [];
        testForm.forEach((el, index) => {
            if (el === 0) {
                 errorss.push(index);
            }
        });
        setTestFormError(() => errorss);
        errorss.length > 0 ? setShow(false) : setShow(true);

    }
    const handleHide = () => {
        setShow(false);

    }

    const handleSend = () => {
    }


    return <>
        {stepState === 0 ? <div className={"navigation-b"}>
            <div></div>
            <Button variant="primary" onClick={enterFioClick}>Продолжить</Button>
            <div></div>

        </div> : true}
        {stepState === 1 ? <div className={"navigation-b"}>
            <Button variant="outline-secondary" onClick={backPage}>Назад</Button>
            <Button variant="primary" onClick={handleShow}>Завершить</Button>
            <div></div>
        </div> : true}
        <Modal show={show} onHide={handleHide} animation={false}>
            <Modal.Header closeButton >
                <Modal.Title>Вы закончили?</Modal.Title>
            </Modal.Header>
          <Modal.Body>Подтвердить отправку?</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleHide}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={handleSend}>
                    Подтвердить
                </Button>
            </Modal.Footer>
        </Modal>
    </>

};

export default Navigation;
