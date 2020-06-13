import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 学科の入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Departments = () => {
  const { dataJson: { departments } } = useStaticQuery(graphql`
    {
      dataJson {
        departments {
          name
          required
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="departments">
      <Form.Label column sm="2">{departments.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={departments.required} name="departments" type="type" />
      </Col>
    </Form.Group>
  )
}

export default Departments
