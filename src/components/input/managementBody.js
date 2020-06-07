import React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 運営母体の区分の入力コンポーネント
 * - 必須項目
 * - 選択項目
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const ManagementBody = () => (
  <Form.Group as={Row} controlId="management-body">
    <Form.Label column sm="2">運営母体の区分</Form.Label>
    <Col sm="10">
      <Form.Control name="management_body" type="text" />
    </Col>
  </Form.Group>
)

export default ManagementBody
