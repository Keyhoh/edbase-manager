import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const Urls = () => (
  <Form.Group as={Row} controlId="urls">
    <Form.Label column sm="2">レポートURL</Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
)

export default Urls
