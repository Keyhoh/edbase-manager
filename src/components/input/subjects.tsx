import * as React from "react"
import {Form, Row, Col} from "react-bootstrap"

/**
 * 扱われている教科の入力コンポーネント
 * - 選択項目
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Subjects = () => (
  <Form.Group as={Row} controlId="subjects">
    <Form.Label column sm="2">扱われている教科</Form.Label>
    <Col sm="10">
      <Form.Control name="subjects" type="text"/>
    </Col>
  </Form.Group>
)

export default Subjects
