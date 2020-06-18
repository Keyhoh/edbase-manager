import * as React from "react"
import { ChangeEvent, useState } from "react"
import { Form } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { isBlank } from "../../../util"

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

  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent) => {
    setText((e.currentTarget as HTMLInputElement).value || "")
  }

  const isInvalid = () => {
    return description.required && isBlank(text)
  }

  return (
    <Form.Group controlId="description">
      <Form.Label>{description.name}</Form.Label>
      <Form.Control required={description.required} isInvalid={isInvalid()} onChange={handleChange} name="description"
                    as="textarea" rows={4} />
      <Form.Control.Feedback type="invalid">入力してください</Form.Control.Feedback>
    </Form.Group>
  )
}

export default Description
