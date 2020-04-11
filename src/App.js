import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './AudioPlayer.js'
import { ReactSVG } from 'react-svg'



function App() {
  return (
    <Container fluid className="full">
      <svg ></svg>
      <Row className="mantra-top">
        <Col xl={2} lg={2} md={2} sm={1} className="mantra-left">
        </Col>
        <Col xl={8} lg={8} md={8} sm={10} className="mantra-text">
          <ReactSVG
            src="desktop/KIRTAN_WEB_text.svg"
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error)
                return
              }
              console.log(svg)
          }}
          onClick={() => {
            console.log('wrapper onClick')
          }}
          />
        </Col>
        <Col xl={2} lg={2} md={2} sm={1} className="mantra-right">
        </Col>
      </Row>
      <Row className="mantra-mdl">
        <Col xl={4} lg={4} md={4} sm={1}></Col>
        <Col xl={4} lg={4} md={4} sm={10}>
          <Player />
        </Col>
        <Col xl={4} lg={4} md={4} sm={1}></Col>
      </Row>
      <Row className="mantra-btm">
        <Col xl={2} lg={2} md={2} sm={1}></Col>
        <Col xl={8} lg={8} md={8} sm={10}></Col>
        <Col xl={2} lg={2} md={2} sm={1}></Col>
      </Row>
    </Container>
  );
}

export default App;
