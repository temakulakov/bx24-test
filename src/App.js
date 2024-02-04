import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import {RecoilRoot} from "recoil";
import img from "./Gagagwa_logo.png";


function App() {
  return (
      <RecoilRoot>
        <Container>
          <Row style={{marginRight: "30px"}}><img src={img} alt="Gagagwa" style={{width: "300px", margin: "auto", marginBottom: "10px"}} height/><Header/></Row>
            <Row className={"root-content"}><Content/></Row>
            <Row><Col><Navigation/></Col></Row>
        </Container>
      </RecoilRoot>
  );
}

export default App;
