import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const ProviderSchool = () => (
  <Form.Group as={Row} controlId="provider-school">
    <Form.Label column sm="2">提供者：学校名</Form.Label>
    <Col sm="10">
      <Form.Control type="text" />
    </Col>
  </Form.Group>
)

export default ProviderSchool
