import React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 学校名・組織名の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const ProviderSchool = () => (
  <Form.Group as={Row} controlId="provider-school">
    <Form.Label column sm="2">学校名・組織名</Form.Label>
    <Col sm="10">
      <Form.Control name="provider_school" type="text" />
    </Col>
  </Form.Group>
)

export default ProviderSchool
