import React from "react"
import { Form, Row, Col } from "react-bootstrap"

const ContentName = () => (
  <Form.Group as={Row} controlId="content-name">
    <Form.Label column sm="2">コンテンツ名称</Form.Label>
    <Col sm="10">
      <Form.Control required name="content_name" type="text" />
    </Col>
  </Form.Group>
)

export default ContentName
