import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

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
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="school-types">
      <Form.Label column sm="2">{school_types.name}</Form.Label>
      <Col sm="10" className="d-flex flex-wrap">
        <Form.Check name="school_types" className="mr-4" id="school-type-kindergarten" label="幼稚園" value="幼稚園"/>
        <Form.Check name="school_types" className="mr-4" id="school-type-elementary" label="小学校" value="小学校"/>
        <Form.Check name="school_types" className="mr-4" id="school-type-junior" label="中学校" value="中学校"/>
        <Form.Check name="school_types" className="mr-4" id="school-type-high" label="高等学校" value="高等学校"/>
        <Form.Check name="school_types" className="mr-4" id="school-type-special" label="特別支援学校" value="特別支援学校"/>
        <Form.Check name="school_types" className="mr-4" id="school-type-else" label="その他" value="その他"/>
      </Col>
    </Form.Group>
  )
}

export default SchoolTypes
