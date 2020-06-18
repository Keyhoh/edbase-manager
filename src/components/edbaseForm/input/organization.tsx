import * as React from "react"
import { ChangeEvent, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { isBlank } from "../../../util"

/**
 * 学校名・組織名の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 単数
 *
 * @returns {*}
 * @constructor
 */
const Organization = () => {
  const { dataJson: { organization } } = useStaticQuery(graphql`
    {
      dataJson {
        organization {
          name
        }
      }
    }`
  )

  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent) => {
    setText((e.currentTarget as HTMLInputElement).value || "")
  }

  const isInvalid = () => {
    return organization.required && isBlank(text)
  }

  return (
    <Form.Group as={Row} controlId="provider-school">
      <Form.Label column sm="2">{organization.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={organization.required} isInvalid={isInvalid()} onChange={handleChange}
                      name="provider_school" type="text" />
        <Form.Control.Feedback type="invalid">入力してください</Form.Control.Feedback>
      </Col>
    </Form.Group>
  )
}

export default Organization
