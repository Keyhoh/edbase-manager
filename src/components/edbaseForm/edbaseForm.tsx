import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"

import ProvidersName from "./input/providersName"
import ProviderPositions from "./input/providerPositions"
import Organization from "./input/organization"
import ContentName from "./input/contentName"
import Departments from "./input/departments"
import Description from "./input/description"
import Tools from "./input/tools"
import Keywords from "./input/keywords"
import ManagementBody from "./input/managementBody"
import SchoolTypes from "./input/schoolTypes"
import Subjects from "./input/subjects"
import Url from "./input/url"
import CsvExport from "../csvExport"
import EdbaseFormData from "./edbaseFormData"
import MultipleText from "../input/multipleText"
import Categories from "./input/categories"

class EdbaseForm extends React.Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
  }

  show(e) {
    e.preventDefault()
    const edbaseForm = new EdbaseFormData(e.currentTarget)
    if (edbaseForm.isInvalid()) return

    console.log(edbaseForm.toCsv())
  }

  render() {
    return (
      <Form noValidate onSubmit={this.show}>
        <ContentName />
        <Form.Group as={Row} controlId="provider">
          <Col>
            <ProvidersName />
          </Col>
          <Col>
            <ProviderPositions />
          </Col>
        </Form.Group>
        <Organization />
        <ManagementBody />
        <SchoolTypes />
        <Departments />
        <Tools />
        <Categories />
        <Keywords />
        <Subjects />
        <Description />
        <Url />
        <CsvExport />
      </Form>
    )
  }
}

export default EdbaseForm
