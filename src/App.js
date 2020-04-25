import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-media';

import './App.css';
import './large.css';
import './medium.css';
import './small.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Player from './AudioPlayer.js'
import LeftIcons from './Left.js'
import RightIcons from './Right.js'
import TopText from './TopText.js'
import BottomText from './BottomText.js'
import Buttons from './Buttons.js';
import FooterText from './FooterText.js';
import Logo from './Logo.js';

function App() {
  return (
    <Container fluid className="full">
      <Row className="mantra-logo">
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="log-left">
          <Media queries={{
            small: "(max-width: 699px)",
            medium: "(min-width: 700px) and (max-width: 1149px)",
            large: "(min-width: 1150px)"
          }}>
            {matches => (
              <div>
                {matches.large && <LeftIcons />}
              </div>
            )}
          </Media>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="log-mid">
          <Logo />
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="log-right">
          <Media queries={{
            small: "(max-width: 699px)",
            medium: "(min-width: 700px) and (max-width: 1149px)",
            large: "(min-width: 1150px)"
          }}>
            {matches => (
              <div>
                {matches.large && <RightIcons />}
              </div>
            )}
          </Media>
        </Col>
      </Row>

      <Row className="mantra-top">
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="top-left">
          <Media queries={{
            small: "(max-width: 699px)",
            medium: "(min-width: 700px) and (max-width: 1149px)",
            large: "(min-width: 1150px)"
          }}>
            {matches => (
              <div>
                {matches.medium && <LeftIcons />}
                {matches.small && <LeftIcons />}
              </div>
            )}
          </Media>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="top-mid">
          <TopText />
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="top-right">
          <Media queries={{
            small: "(max-width: 699px)",
            medium: "(min-width: 700px) and (max-width: 1149px)",
            large: "(min-width: 1150px)"
          }}>
            {matches => (
              <div>
                {matches.medium && <RightIcons />}
                {matches.small && <RightIcons />}
              </div>
            )}
          </Media>
        </Col>
      </Row>

      <Row className="mantra-player">
        <Col xl={3} lg={3} md={2} sm={2} xs={2} className="ply-left" />
        <Col xl={6} lg={6} md={8} sm={8} xs={8} className="ply-mid">
          <Player />
        </Col>
        <Col xl={3} lg={3} md={2} sm={2} xs={2} className="ply-right" />
      </Row>

      <Row className="mantra-buttons">
        <Col xl={4} lg={4} md={4} sm={4} xs={4} className="pbn-left" />
        <Col xl={4} lg={4} md={4} sm={4} xs={4} className="pbn-mid">
          <Buttons />
        </Col>
        <Col xl={4} lg={4} md={4} sm={4} xs={4} className="pbn-right" />
      </Row>

      <Row className="mantra-btm">
        <Col xl={2} lg={2} md={2} sm={2} xs={2}className="btm-left" />
        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="btm-mid">
          <BottomText />
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="btm-right" />
      </Row>

      <Row className="mantra-ftr">
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="ftr-left" />
        <Col xl={8} lg={8} md={8} sm={8} xs={8} className="ftr-mid">
          <FooterText />
        </Col>
        <Col xl={2} lg={2} md={2} sm={2} xs={2} className="ftr-right" />
      </Row>
    </Container>
  );
}

export default App;
