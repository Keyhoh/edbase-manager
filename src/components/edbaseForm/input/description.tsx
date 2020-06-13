import * as React from "react"
import { Form } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 実践事例レポートの内容詳細の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 文章入力
 *
 * @returns {*}
 * @constructor
 */
const Description = () => {
  const { dataJson: { description } } = useStaticQuery(graphql`
    {
      dataJson {
        description {
          name
          required
        }
      }
    }`
  )
  return (
    <Form.Group controlId="description">
      <Form.Label>{description.name}</Form.Label>
      <Form.Control required={description.required} name="description" as="textarea" rows={4} />
    </Form.Group>
  )
}

export default Description
