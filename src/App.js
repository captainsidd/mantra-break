import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './AudioPlayer.js'
import LeftIcons from './Left.js'
import RightIcons from './Right.js'
import TopText from './TopText.js'
import BottomText from './BottomText.js'
import Buttons from './Buttons.js';


function App() {
  return (
    <Container fluid className="full">
      <Row className="mantra-top">
        <Col xl={2} lg={2} md={2} sm={2} className="top-left">
          <LeftIcons/>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} className="top-mid">
          <TopText />
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} className="top-right">
          <RightIcons />
        </Col>
      </Row>

      <Row className="mantra-player">
        <Col xl={3} lg={3} md={2} sm={1} className="ply-left" />
        <Col xl={6} lg={6} md={8} sm={10} className="ply-mid">
          <Player />
        </Col>
        <Col xl={3} lg={3} md={2} sm={1} className="ply-right" />
      </Row>

      <Row className="mantra-buttons">
        <Col xl={4} lg={4} md={4} sm={4} className="pbn-left" />
        <Col xl={4} lg={4} md={4} sm={4} className="pbn-mid">
          <Buttons />
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} className="pbn-right" />
      </Row>

      <Row className="mantra-btm">
        <Col xl={2} lg={2} md={2} sm={1} className="btm-left" />
        <Col xl={8} lg={8} md={8} sm={10} className="btm-mid">
          <BottomText />
        </Col>
        <Col xl={2} lg={2} md={2} sm={1} className="btm-right" />
      </Row>
    </Container>
  );
}

export default App;
