import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="bg-primary text-white p-4">
          <Col>
            <h5>Contact us</h5>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
          </Col>
          <Col>
            <h5>Contact us</h5>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
          </Col>
          <Col>
            <h5>Contact us</h5>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
          </Col>
          <Col>
            <h5>Contact us</h5>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;