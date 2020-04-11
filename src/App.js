import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './AudioPlayer.js'


function App() {
  return (
    <Container fluid className="full">
      <Row className="mantra-top">
        <Col xl={2} lg={2} md={2} sm={1} className="mantra-left">
        </Col>
        <Col xl={8} lg={8} md={8} sm={10} className="mantra-text">
          <div className="player">
            <Player />
          </div>
        </Col>
        <Col xl={2} lg={2} md={2} sm={1} className="align-right mantra-right">
        </Col>
      </Row>
    </Container>
  );
}

export default App;
