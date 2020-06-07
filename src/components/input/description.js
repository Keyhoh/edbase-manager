import React from "react"
import { Form } from "react-bootstrap"

/**
 * 実践事例レポートの内容詳細の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 文章入力
 *
 * @returns {*}
 * @constructor
 */
const Description = () => (
  <Form.Group controlId="description">
    <Form.Label>実践事例レポートの内容詳細</Form.Label>
    <Form.Control required name="description" as="textarea" rows="4" />
  </Form.Group>
)

export default Description
