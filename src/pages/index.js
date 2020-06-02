import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Form from "../components/edbaseForm"

const IndexPage = () => (
  <Layout>
    <Form datum={{
      content_name: { name: "コンテンツ名称", required: true },
      provider_name: { name: "提供者・氏名", required: false }
    }} />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
