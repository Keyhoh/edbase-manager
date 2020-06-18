import * as React from "react"
import { ChangeEvent, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { isBlank } from "../../../util"

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
          format
        }
      }
    }`
  )

  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent) => {
    setText((e.currentTarget as HTMLInputElement).value || "")
  }

  const isInvalid = () => {
    return management_body.required && isBlank(text)
  }

  const generateOptions = () => {
    return (
      management_body.format.map(schoolType => <option value={schoolType}>{schoolType}</option>)
    )
  }

  return (
    <Form.Group as={Row} controlId="management-body">
      <Form.Label column sm="2">{management_body.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={management_body.required} isInvalid={isInvalid()} onChange={handleChange}
                      name="management_body" as="select">
          <option disabled selected>選択してください</option>
          {generateOptions()}
        </Form.Control>
      </Col>
    </Form.Group>
  )
}
export default ManagementBody
