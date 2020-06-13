import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 氏名の入力コンポーネント
 * - 必須項目
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const ProvidersName = () => {
  const { dataJson: { providers } } = useStaticQuery(graphql`
    {
      dataJson {
        providers {
          format {
            name {
              name
            }
          }
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="provider-name">
      <Form.Label column sm="4">{providers.format.name.name}</Form.Label>
      <Col sm="8">
        <Form.Control name="provider_name" type="text" />
      </Col>
    </Form.Group>
  )
}

export default ProvidersName
