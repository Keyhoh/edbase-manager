import React from "react"
import PropTypes from "prop-types"

const Text = ({ id, name, init = ``, required = false}) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} name={id} value={init} required={required} onChange={() => {}}/>
    </>
  )
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  init: PropTypes.string,
  required: PropTypes.bool,
}

export default Text
