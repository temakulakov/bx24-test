import "./Navigation.css"
import {useRecoilState} from "recoil";
import {inputFormState, stepFormState, testFormErrorState, testFormState} from "../../store";
import {Button, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import { capitalize } from "lodash";
import crmLeadAdd from "../../bx24-api/crm.lead.add";

const Navigation = () => {
    const [ show, setShow ] = useState(false)

    const [stepState, setStepState] = useRecoilState(stepFormState);
    const [fioString, setFioString] = useRecoilState(inputFormState);
    const [testForm, setTestForm] = useRecoilState(testFormState);
    const [testFormError, setTestFormError] = useRecoilState(testFormErrorState)

    const backPage = () =>
        setStepState((state) => state - 1);
        localStorage.setItem("stepFormState", JSON.stringify(stepState));

    const nextPage = () =>
        setStepState((state) => state + 1);
        localStorage.setItem("stepFormState", JSON.stringify(stepState));

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
            localStorage.setItem("inputFormState", JSON.stringify({
                error: error,
                state: fioString.state[0].toUpperCase() + fioString.state.slice(1),
                fio: fioString.fio?.split(' ').map((word) => capitalize(word)).join(' ')
            }));
            return {
                error: error,
                state: fioString.state[0].toUpperCase() + fioString.state.slice(1),
                fio: fioString.fio?.split(' ').map((word) => capitalize(word)).join(' ')
        }});


        localStorage.setItem("inputFormState", JSON.stringify(fioString));
        localStorage.setItem("stepFormState", JSON.stringify(stepState));
        localStorage.setItem("inputFormState", JSON.stringify(fioString));


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
    useEffect(() => {
        localStorage.setItem('inputFormState', JSON.stringify({
            fio: fioString.fio,
            state: fioString.state,
            error: fioString.error,
        }));
    }, [fioString]);

    const handleSend = () => {
        crmLeadAdd(fioString.fio, fioString.state, testForm);
        setStepState(3);
        setShow(false);
        setFioString(() => {
            return {
                error: false,
                state: "",
                fio: "",
            }});
        setTestForm(() => [0, 0, 0, 0, 0, 0]);

        localStorage.setItem("inputFormState", JSON.stringify({
            error: false,
            state: "",
            fio: "",
        }));

        localStorage.setItem("stepFormState", JSON.stringify(0));
        localStorage.setItem("testFormState", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    }


    return <>
        {stepState === 0 ? <div className={"navigation-b"}>
            <div></div>
            <Button variant="primary" onClick={enterFioClick}>Продолжить</Button>
            <div></div>

        </div> : true}
        {stepState === 1 ? <div className={"navigation-b"}>
            <Button variant="outline-secondary" onClick={backPage}>Назад</Button>
            <Button variant="primary" onClick={nextPage}>Далее</Button>
        </div> : true}
        {stepState === 2 ? <div className={"navigation-b"}>
            <Button variant="outline-secondary" onClick={backPage}>Назад</Button>
            <Button variant="primary" onClick={nextPage}>Далее</Button>
        </div> : true}
        {stepState === 3 ? <div className={"navigation-b"}>
            <Button variant="outline-secondary" onClick={backPage}>Назад</Button>
            <Button variant="primary" onClick={handleShow}>Завершить</Button>
            <div></div>
        </div> : true}
        {/*{stepState === 3 ? <div className={"navigation-b"}>*/}
        {/*    <div></div>*/}
        {/*    <Button variant="primary" onClick={handleReturn}>Пройти тест заново</Button>*/}
        {/*    <div></div>*/}

        {/*</div> : true}*/}

        { stepState === 4 ? <div className={"navigation-b"}>
            <div></div>
            <Button variant="primary" onClick={() => {setStepState(0);
            }}>Пройти тест заново</Button>
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
