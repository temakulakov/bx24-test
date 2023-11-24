import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import {useEffect} from "react";
import {RecoilRoot} from "recoil";

import image from "./confitty.gif";
import axios from "axios";


function App() {
    useEffect(() => {
        // const url = `https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.lead.userfield.get?` +
        //     `fields['UF_CRM_1699599951990']`
        // axios.post(url).then((resp) => console.log(resp));
    }, []);

  return (
      <RecoilRoot>
    <Container>
        <Row><Header/></Row>
      <Row className={"root-content"}><Content/></Row>
      <Row ><Col ><Navigation/></Col></Row>
    </Container>
      </RecoilRoot>
  );
}

export default App;
