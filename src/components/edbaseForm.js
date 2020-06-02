import React from "react"
import Proptypes from "prop-types"
import { Form } from "react-bootstrap"

import ProviderName from "../components/input/providerName"

const EdbaseForm = () => {
  return (
    <Form>
      <ProviderName />
    </Form>
  )
}

Form.propTypes = {
  datum: Proptypes.object.isRequired
}

export default EdbaseForm
