import * as React from "react"
import { ChangeEvent, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { isBlank } from "../../../util"

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

  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent) => {
    setText((e.currentTarget as HTMLInputElement).value || "")
  }

  const isInvalid = () => {
    return content_name.required && isBlank(text)
  }

  return (
    <Form.Group as={Row} controlId="content-name">
      <Form.Label column sm="2">{content_name.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={content_name.required} isInvalid={isInvalid()} onChange={handleChange}
                      name="content_name" type="text" />
        <Form.Control.Feedback type="invalid">入力してください</Form.Control.Feedback>
      </Col>
    </Form.Group>
  )
}

export default ContentName
