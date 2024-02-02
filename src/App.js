import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import {RecoilRoot} from "recoil";


function App() {
  return (
      <RecoilRoot>
    <Container>
        <Row style={{marginRight: "30px"}}><Header/></Row>
      <Row className={"root-content"}><Content/></Row>
      <Row ><Col><Navigation/></Col></Row>
    </Container>
      </RecoilRoot>
  );
}

export default App;
