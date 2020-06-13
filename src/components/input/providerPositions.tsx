import * as React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

/**
 * 役職の入力コンポーネント
 * - 自由入力
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const ProviderPositions = () => {
  const { dataJson: { providers } } = useStaticQuery(graphql`
    {
      dataJson {
        providers {
          format {
            position {
              name
            }
          }
        }
      }
    }`
  )
  return (
    <Form.Group as={Row} controlId="provider-position">
      <Form.Label column sm="4">{providers.format.position.name}</Form.Label>
      <Col sm="8">
        <Form.Control name="provider_position" type="text" />
      </Col>
    </Form.Group>
  )
}

export default ProviderPositions
