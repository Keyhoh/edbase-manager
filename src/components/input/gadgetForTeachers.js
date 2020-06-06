import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const GadgetForTeachers = () => (
  <Form.Group as={Row} controlId="gadget-for-teachers">
    <Form.Label column sm="2">教員が使用するガジェット</Form.Label>
    <Col sm="10">
      <Form.Control name="gadget_for_teachers" type="text" />
    </Col>
  </Form.Group>
)

export default GadgetForTeachers
