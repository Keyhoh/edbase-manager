import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const ManagementBody = () => (
  <Form.Group as={Row} controlId="management-body">
    <Form.Label column sm="2">運営母体</Form.Label>
    <Col sm="10">
      <Form.Control name="management_body" type="text" />
    </Col>
  </Form.Group>
)

export default ManagementBody
