import * as React from "react"
import {Form, Row, Col} from "react-bootstrap"

/**
 * 活用するICTツール・サービスの入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const IctItems = () => (
  <Form.Group as={Row} controlId="gadget-for-students">
    <Form.Label column sm="2">活用するICTツール・サービス</Form.Label>
    <Col sm="10">
      <Form.Control name="gadget_for_students" type="text"/>
    </Col>
  </Form.Group>
)

export default IctItems
