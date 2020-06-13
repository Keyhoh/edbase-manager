import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 運営母体の区分の入力コンポーネント
 * - 必須項目
 * - 選択項目
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const ManagementBody = () => {
  const { dataJson: { management_body } } = useStaticQuery(graphql`
    {
      dataJson {
        management_body {
          name
          required
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="management-body">
      <Form.Label column sm="2">{management_body.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={management_body.required} name="management_body" type="text" />
      </Col>
    </Form.Group>
  )
}
export default ManagementBody
