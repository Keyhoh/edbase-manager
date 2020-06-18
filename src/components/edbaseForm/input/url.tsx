import * as React from "react"
import { ChangeEvent, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { isBlank } from "../../../util"

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
    return url.required && isBlank(text)
  }

  return (
    <Form.Group as={Row} controlId="urls">
      <Form.Label column sm="2">{url.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={url.required} isInvalid={isInvalid()} onChange={handleChange} name="url" type="text" />
        <Form.Control.Feedback type="invalid">入力してください</Form.Control.Feedback>
      </Col>
    </Form.Group>
  )
}

export default Url
