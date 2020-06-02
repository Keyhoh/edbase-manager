import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const ProviderPosition = () => (
  <Form.Group as={Row} controlId="provider-name">
    <Form.Label column sm="2">提供者：役職</Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
)

export default ProviderPosition
