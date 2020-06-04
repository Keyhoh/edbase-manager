import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const TargetParsons = () => (
  <Form.Group as={Row} controlId="target-parsons">
    <Form.Label column sm="2">レポートを活用する人</Form.Label>
    <Col sm="10">
      <Form.Control type="text"/>
    </Col>
  </Form.Group>
)

export default TargetParsons
