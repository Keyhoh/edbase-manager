import React from "react"
import Proptypes from "prop-types"

import Text from "./input/text"

const Form = ({ datum = {} }) => {
  const input = Object.keys(datum).map(field => {
    const meta = datum[field]
    return (
      <Text key={field} id={field} name={meta.name} init={meta.init} required={meta.required} />
    )
  })
  return (
    <>
      {input}
    </>
  )
}

Form.propTypes = {
  datum: Proptypes.object.isRequired
}

export default Form
