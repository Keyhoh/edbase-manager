import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const GadgetsForTeachers = () => (
  <Form.Group as={Row} controlId="gadgets-for-teachers">
    <Form.Label column sm="2">教員が使用するガジェット</Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
)

export default GadgetsForTeachers
