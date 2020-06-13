import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { v4 as uuid } from "uuid"

/**
 * 実践の現場となっている学校種
 * - 必須項目
 * - 選択項目
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const SchoolTypes = () => {
  const { dataJson: { school_types } } = useStaticQuery(graphql`
    {
      dataJson {
        school_types {
          name
          format
        }
      }
    }`
  )
  const getChecks = (checkList: string[]) => {
    return checkList.map((name: string) => (
      <Form.Check key={uuid().toString()} name="school_types" className="mr-4" label={name} value={name} />
    ))
  }
  return (
    <Form.Group as={Row} controlId="school-types">
      <Form.Label column sm="2">{school_types.name}</Form.Label>
      <Col sm="10" className="d-flex flex-wrap">{getChecks(school_types.format)}</Col>
    </Form.Group>
  )
}

export default SchoolTypes
