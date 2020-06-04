import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const GadgetsForStudents = () => (
  <Form.Group as={Row} controlId="gadgets-for-students">
    <Form.Label column sm="2">生徒が使用するガジェット</Form.Label>
    <Col sm="10">
      <Form.Control type="text"/>
    </Col>
  </Form.Group>
)

export default GadgetsForStudents
