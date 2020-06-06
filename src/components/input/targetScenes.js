import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const TargetScenes = () => (
  <Form.Group as={Row} controlId="target-scenes">
    <Form.Label column sm="2">活用シーンの区分</Form.Label>
    <Col sm="10">
      <Form.Control name="target-scenes" type="text"/>
    </Col>
  </Form.Group>
)

export default TargetScenes
