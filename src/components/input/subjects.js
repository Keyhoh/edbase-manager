import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const Subjects = () => (
  <Form.Group as={Row} controlId="subjects">
    <Form.Label column sm="2">扱われている教科</Form.Label>
    <Col sm="10">
      <Form.Control name="subjects" type="text"/>
    </Col>
  </Form.Group>
)

export default Subjects
