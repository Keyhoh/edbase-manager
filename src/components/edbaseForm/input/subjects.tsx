import * as React from "react"
import {Form, Row, Col} from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 扱われている教科の入力コンポーネント
 * - 選択項目
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Subjects = () => {
  const { dataJson: { subjects } } = useStaticQuery(graphql`
    {
      dataJson {
        subjects {
          name
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="subjects">
      <Form.Label column sm="2">{subjects.name}</Form.Label>
      <Col sm="10">
        <Form.Control required={subjects.required} name="subjects" type="text"/>
      </Col>
    </Form.Group>
  )
}

export default Subjects
