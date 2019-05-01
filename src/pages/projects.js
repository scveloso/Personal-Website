import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <Content>
            <h1>Projects</h1>
            <p>This is a work in progress.</p>
        </Content>
    </Layout>
)

export default Projects