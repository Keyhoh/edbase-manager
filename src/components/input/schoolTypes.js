import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const SchoolTypes = () => (
  <Form.Group as={Row} controlId="school-types">
    <Form.Label column sm="2">学校種</Form.Label>
    <Col sm="10">
      <Form.Control type="text"/>
    </Col>
  </Form.Group>
)

export default SchoolTypes
