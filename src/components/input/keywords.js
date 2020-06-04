import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const Keywords = () => (
  <Form.Group as={Row} controlId="keywords">
    <Form.Label column sm="2">キーワード</Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
)

export default Keywords
