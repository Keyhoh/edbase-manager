import React from "react"
import Proptypes from "prop-types"
import { Col, Form, Row } from "react-bootstrap"

import ProviderName from "../components/input/providerName"
import ProviderPosition from "./input/providerPosition"
import ProviderSchool from "./input/providerSchool"
import ContentName from "./input/contentName"
import Department from "./input/department"
import Description from "./input/description"
import GadgetsForStudents from "./input/gadgetsForStudents"
import GadgetsForTeachers from "./input/gadgetsForTeachers"
import Keywords from "./input/keywords"
import ManagementBody from "./input/managementBody"
import ReportFormats from "./input/reportFormats"
import SchoolTypes from "./input/schoolTypes"
import Subjects from "./input/subjects"
import TargetParsons from "./input/targetParsons"
import TargetScenes from "./input/targetScenes"
import Urls from "./input/urls"

const EdbaseForm = () => {
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
      <GadgetsForStudents />
      <GadgetsForTeachers />
      <Keywords />
      <ReportFormats />
      <Subjects />
      <TargetParsons />
      <TargetScenes />
      <Description />
      <Urls />
    </Form>
  )
}

Form.propTypes = {
  datum: Proptypes.object.isRequired
}

export default EdbaseForm
