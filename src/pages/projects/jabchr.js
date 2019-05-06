import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "@emotion/styled"

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: '/jabc-screens/login.png',
        thumbnail: '/jabc-screens-thumb/login.png'
    },
    {
        original: '/jabc-screens/myprofile.png',
        thumbnail: '/jabc-screens-thumb/myprofile.png'
    },
    {
        original: '/jabc-screens/performance_base.png',
        thumbnail: '/jabc-screens-thumb/performance_base.png'
    },
    {
        original: '/jabc-screens/performance_add_section.png',
        thumbnail: '/jabc-screens-thumb/performance_add_section.png'
    },
    {
        original: '/jabc-screens/performance_add_row.png',
        thumbnail: '/jabc-screens-thumb/performance_add_row.png'
    },
    {
        original: '/jabc-screens/performance_with_section.png',
        thumbnail: '/jabc-screens-thumb/performance_with_section.png'
    },

    {
        original: '/jabc-screens/manage_employees.png',
        thumbnail: '/jabc-screens-thumb/manage_employees.png'
    },
    {
        original: '/jabc-screens/manage_employee_profile.png',
        thumbnail: '/jabc-screens-thumb/manage_employee_profile.png'
    },
    {
        original: '/jabc-screens/roles.png',
        thumbnail: '/jabc-screens-thumb/roles.png'
    }
]

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Jabchr = () => (
    <Layout>
        <SEO title="Projects - JABC HR System" />
        <Content>
            <h1>Projects</h1>
            <h2>JABC HR System</h2>
            <p>In the Spring of 2019, I took a course at UBC called CPSC 319 - Software Engineering Project. This course
            had me working on a project specified by a real-world client - Junior Association BC (JABC). JABC is a registered charity that aims to provide education programs for youth.
            As such, JABC has various employees with various roles and their HR team calls for an HR system to help them conduct HR administration. This is where my team and I come in.</p>
            <h3>My Contribution</h3>
            <ul>
                <li>Crafted database schema design to support client features (among which are employee history, customizable performance reviews and variable account priviledges).</li>
                <li>Wrote backend services, wrote stored procedures to support backend services accessing database, and wrote frontend React components and pages.</li>
                <li>Created completely customizable React table component to support completely customizable performance reviews and work plans.</li>
            </ul>
            <ImageGallery items={images}/>


        </Content>
    </Layout>
)

export default Jabchr