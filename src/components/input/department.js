import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const Department = () => (
  <Form.Group as={Row} controlId="department">
    <Form.Label column sm="2">学科</Form.Label>
    <Col sm="10">
      <Form.Control name="department" type="type" />
    </Col>
  </Form.Group>
)

export default Department
