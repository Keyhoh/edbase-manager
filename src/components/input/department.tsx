import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"

/**
 * 学科の入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Department = () => (
  <Form.Group as={Row} controlId="department">
    <Form.Label column sm="2">学科</Form.Label>
    <Col sm="10">
      <Form.Control name="department" type="type" />
    </Col>
  </Form.Group>
)

export default Department
