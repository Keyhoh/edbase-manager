import * as React from "react"
import { Col, Form, Row } from "react-bootstrap"

import ProviderName from "../input/providerName"
import ProviderPosition from "../input/providerPosition"
import ProviderSchool from "../input/providerSchool"
import ContentName from "../input/contentName/contentName"
import Department from "../input/department"
import Description from "../input/description"
import IctItems from "../input/ictItems"
import Keywords from "../input/keywords"
import ManagementBody from "../input/managementBody"
import SchoolTypes from "../input/schoolTypes"
import Subjects from "../input/subjects"
import Urls from "../input/urls"
import CsvExport from "../csvExport"
import EdbaseFormData from "./edbaseFormData"

class EdbaseForm extends React.Component {

  constructor(props) {
    super(props)
    this.show = this.show.bind(this)
  }

  show(e) {
    e.preventDefault()
    const form = document.querySelector("form")
    const edbaseForm = new EdbaseFormData(form)
    console.log(edbaseForm.toCsv())
  }

  render() {
    return (
      <Form onSubmit={this.show}>
        <ContentName />
        <Form.Group as={Row} controlId="provider">
          <Col>
            <ProviderName />
          </Col>
          <Col>
            <ProviderPosition />
          </Col>
        </Form.Group>
        <ProviderSchool />
        <ManagementBody />
        <SchoolTypes />
        <Department />
        <IctItems />
        <Keywords />
        <Subjects />
        <Description />
        <Urls />
        <CsvExport />
      </Form>
    )
  }
}

export default EdbaseForm
