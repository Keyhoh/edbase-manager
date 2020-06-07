import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import EdbaseForm from "../components/edbaseForm/edbaseForm"

const IndexPage = () => (
  <Layout>
    <EdbaseForm />
    <Link to="/page-2/">Go to page 2</Link><br />
  </Layout>
)

export default IndexPage
