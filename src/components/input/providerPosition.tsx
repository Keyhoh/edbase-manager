import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 役職の入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const ProviderPosition = () => (
  <Form.Group as={Row} controlId="provider-position">
    <Form.Label column sm="4">提供者：役職</Form.Label>
    <Col sm="8">
      <Form.Control name="provider_position" type="text" />
    </Col>
  </Form.Group>
)

export default ProviderPosition
