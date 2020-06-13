import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

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
  return (
    <Form.Group as={Row} controlId="provider-school">
      <Form.Label column sm="2">{organization.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={organization.required} name="provider_school" type="text" />
      </Col>
    </Form.Group>
  )
}

export default Organization
