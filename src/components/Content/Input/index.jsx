import "./Input.css"
import {Form} from "react-bootstrap";
import { useRecoilState } from "recoil";
import {inputFormState} from "../../../store";
import React, {useEffect} from "react";
import * as formik from "formik";
import * as yup from "yup";

const Input = () => {
    const [ stateValues, setStateValues ] = useRecoilState(inputFormState);

    useEffect(() => {
        setStateValues(() => JSON.parse(localStorage.getItem('inputFormState')));
        return () => {
            localStorage.setItem("inputFormState", JSON.stringify(stateValues))
        };
    }, []);
    useEffect(() => {
        localStorage.setItem("inputFormState", JSON.stringify(stateValues))
    }, [stateValues]);

    return <div style={{display: "flex", flexDirection: "column"}}>
        <h2 style={{textAlign: "center"}}>Заполните данные</h2>
            <Form className="input">
                <Form.Group className="mb-3" controlId="formGroupFIO">
                    <Form.Label>Введите ФИО</Form.Label>
                    <Form.Control isInvalid={!(stateValues.error !== 3 && stateValues.error !== 1)} isValid={stateValues.error !== 3 && stateValues.error !== 1 && stateValues.error !== false} required type="name" placeholder="Введите ФИО" value={stateValues.fio} onChange={(e)=>setStateValues({fio: e.target.value, error: stateValues.error, state: stateValues.state})}/>
                    <Form.Control.Feedback type="invalid">
                        Пожалуйста, введите Ваши полные ФИО
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Здесь все правильно
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupState">
                    <Form.Label>Введите должность</Form.Label>
                    <Form.Control isInvalid={!(stateValues.error !== 3 && stateValues.error !== 2)} isValid={stateValues.error !== 3 && stateValues.error !== 2 && stateValues.error !== false} required type="name" placeholder="Введите должность" value={stateValues.state} onChange={(e)=>setStateValues({fio: stateValues.fio, error: stateValues.error ,  state: e.target.value})}/>
                    <Form.Control.Feedback type="invalid">
                        Пожалуйста, введите Вашу должность
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Здесь все правильно
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
    </div>

};

export default Input;
