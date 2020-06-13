import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

/**
 * コンテンツ名称の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 複数不可
 *
 * @returns {*}
 * @constructor
 */
const ContentName = () => {
  const { dataJson: { content_name } } = useStaticQuery(graphql`
    {
      dataJson {
        content_name {
          name
          required
        }
      }
    }`
  )

  return (
    <Form.Group as={Row} controlId="content-name">
      <Form.Label column sm="2">{content_name.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={content_name.required} name="content_name" type="text" />
      </Col>
    </Form.Group>
  )
}

export default ContentName
