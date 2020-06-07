import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 実践されている内容のキーワード
 * - 必須項目
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Keywords = () => (
  <Form.Group as={Row} controlId="keywords">
    <Form.Label column sm="2">実践されている内容のキーワード</Form.Label>
    <Col sm="10">
      <Form.Control name="keywords" type="text" />
    </Col>
  </Form.Group>
)

export default Keywords
