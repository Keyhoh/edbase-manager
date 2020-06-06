import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const GadgetForStudents = () => (
  <Form.Group as={Row} controlId="gadget-for-students">
    <Form.Label column sm="2">生徒が使用するガジェット</Form.Label>
    <Col sm="10">
      <Form.Control name="gadget_for_students" type="text"/>
    </Col>
  </Form.Group>
)

export default GadgetForStudents
