import * as React from "react"
import { Form, Row } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"

import SelectCheck from "../../input/select/check"

/**
 * カテゴリのコンポーネント
 * - 必須項目
 * - 選択項目
 * - 複数可
 *
 * @returns {*}
 * @constructor
 */
const Categories = () => {
  const { dataJson: { categories } } = useStaticQuery(graphql`
    {
      dataJson {
        categories {
          name
          format
        }
      }
    }`
  )

  const getEntries = (nameList: string[]) => nameList.map((name: string) => {
    return { label: name, value: name }
  })

  return (
    <Form.Group as={Row} controlId="categories">
      <Form.Label column sm="2">{categories.name}</Form.Label>
      <SelectCheck required={true} name="school_types" inline entries={getEntries(categories.format)} />
    </Form.Group>
  )
}

export default Categories
