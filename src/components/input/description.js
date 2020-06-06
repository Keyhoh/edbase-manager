import React from "react"
import { Form } from "react-bootstrap"

const Description = () => (
  <Form.Group controlId="description">
    <Form.Label>コンテンツ詳細</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
)

export default Description
