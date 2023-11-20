import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  return (
    <Container>
      <Row><Header/></Row>
      <Row className={"root-content"}><Content/></Row>
      <Row ><Col ><Navigation/></Col></Row>
    </Container>
  );
}

export default App;
