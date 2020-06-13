import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 実践されている内容のキーワード
 * - 必須項目
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Keywords = () => {
  const { dataJson: { keywords } } = useStaticQuery(graphql`
    {
      dataJson {
        keywords {
          name
          required
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="keywords">
      <Form.Label column sm="2">{keywords.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={keywords.required} name="keywords" type="text" />
      </Col>
    </Form.Group>
  )
}
export default Keywords
