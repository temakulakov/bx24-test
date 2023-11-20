import "./Table.css"
import React from "react";
import { Table } from "react-bootstrap"
import {headRowText, leftColText, detailes} from "../../../store/data";
import Modal from "./Modal";
import { v4 } from 'uuid';
import { useRecoilState } from "recoil";
import {testFormErrorState} from "../../../store";
const TableComp = () => {
    const [errors, setErrors] = useRecoilState(testFormErrorState);
    return <div className={"roots"}>
        {/*#FFCBD0*/}
                        <h2 style={{textAlign: "center"}}>Заполните тест</h2>
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                {headRowText.map((el, index) => {
                                    return <td className={"head-row"} key={v4()}>{el}</td>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {leftColText.map((el, index) => {
                                return <tr key={v4()} className={errors.includes(index) ? "red" : ""} >
                                    <td className={"left-row"}>{el}</td>
                                    {detailes[index].map((elem, ind) => <td key={v4()}><Modal  theme={index} level={ind}>
                                            <ol>
                                                {elem.map((element, ind) => <li key={v4()}>{element}</li>)}
                                            </ol>
                                        </Modal></td>
                                    )}
                                </tr>
                            })}
                            </tbody>
                        </Table>
                        </div>
};

export default TableComp;
