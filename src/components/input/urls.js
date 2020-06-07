import React from "react"
import {Form, Row, Col} from "react-bootstrap"

/**
 * 実践事例レポートURLの入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const Urls = () => (
  <Form.Group as={Row} controlId="urls">
    <Form.Label column sm="2">実践事例レポートURL</Form.Label>
    <Col sm="10">
      <Form.Control name="urls" type="text" />
    </Col>
  </Form.Group>
)

export default Urls
