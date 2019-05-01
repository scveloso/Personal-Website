import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import ProjectItem from "../components/project-item";
import Divider from '@material-ui/core/Divider';

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
            <ProjectItem name={"JABC HR"}
                         imgPath={"jabc-pic.png"}
                         blurb={"Human resources management system for Junior Association BC"}
                         skills={["JavaScript", "TypeScript", "React", "Redux", "MySQL"]}
            />
            <br/>
            <ProjectItem name={"Stealthy Sam"}
                         imgPath={"stealthy-sam-pic.png"}
                         blurb={"Top-down roguelike stealth game"}
                         skills={["C++", "OpenGL"]}
            />
            <br/>
            <ProjectItem name={"Room8"}
                         imgPath={"room8-pic.png"}
                         blurb={"Roommate organization Android app"}
                         skills={["Java", "Android", "Firebase"]}
            />
            <br/>
            <ProjectItem name={"Alternative Tweets"}
                         imgPath={"alternative-tweet-pic.png"}
                         blurb={"Real or fake twitter message web game"}
                         skills={["HTML", "CSS", "JavaScript", "Python"]}
            />
        </Content>
    </Layout>
)

export default Projects