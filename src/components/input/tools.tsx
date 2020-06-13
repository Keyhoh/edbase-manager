import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 活用するICTツール・サービスの入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Tools = () => {
  const { dataJson: { tools } } = useStaticQuery(graphql`
    {
      dataJson {
        tools {
          name
          required
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="gadget-for-students">
      <Form.Label column sm="2">{tools.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={tools.required} name="gadget_for_students" type="text" />
      </Col>
    </Form.Group>
  )
}
export default Tools
