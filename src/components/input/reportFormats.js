import React from "react"
import {Form, Row, Col} from "react-bootstrap"

const ReportFormats = () => (
  <Form.Group as={Row} controlId="report-formats">
    <Form.Label column sm="2">レポートの形式</Form.Label>
      <Col sm="10">
        <Form.Control type="text"/>
      </Col>
  </Form.Group>
)

export default ReportFormats
