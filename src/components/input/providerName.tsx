import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 氏名の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const ProviderName = () => (
  <Form.Group as={Row} controlId="provider-name">
    <Form.Label column sm="4">氏名</Form.Label>
    <Col sm="8">
      <Form.Control name="provider_name" type="text" />
    </Col>
  </Form.Group>
)

export default ProviderName
