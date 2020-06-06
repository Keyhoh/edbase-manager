import React from "react"
import { Col, Form, Row } from "react-bootstrap"

import ProviderName from "../components/input/providerName"
import ProviderPosition from "./input/providerPosition"
import ProviderSchool from "./input/providerSchool"
import ContentName from "./input/contentName"
import Department from "./input/department"
import Description from "./input/description"
import GadgetForStudents from "./input/gadgetForStudents"
import GadgetsForTeachers from "./input/gadgetForTeachers"
import Keywords from "./input/keywords"
import ManagementBody from "./input/managementBody"
import ReportFormats from "./input/reportFormats"
import SchoolTypes from "./input/schoolTypes"
import Subjects from "./input/subjects"
import TargetParsons from "./input/targetParsons"
import TargetScenes from "./input/targetScenes"
import Urls from "./input/urls"
import CsvExport from "./csvExport"

class EdbaseForm extends React.Component {
  render() {
    return (
      <Form>
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
        <GadgetForStudents />
        <GadgetsForTeachers />
        <Keywords />
        <ReportFormats />
        <Subjects />
        <TargetParsons />
        <TargetScenes />
        <Description />
        <Urls />
        <CsvExport />
      </Form>
    )
  }
}

export default EdbaseForm
