import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 実践事例レポートURLの入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const Url = () => {
  const { dataJson: { url } } = useStaticQuery(graphql`
    {
      dataJson {
        url {
          name
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="urls">
      <Form.Label column sm="2">{url.name}</Form.Label>
      <Col sm="10">
        <Form.Control name="urls" type="text" />
      </Col>
    </Form.Group>
  )
}

export default Url
