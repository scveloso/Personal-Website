import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import ProjectItem from "../components/project-item";

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
                         imgPath={"/project-thumbnails/jabc-pic.png"}
                         blurb={"Human resources management system for Junior Association BC"}
                         skills={["JavaScript", "TypeScript", "React", "Redux", "MySQL"]}
                         link={"/projects/jabchr"}
            />
            <br/>
            <ProjectItem name={"Stealthy Sam"}
                         imgPath={"/project-thumbnails/stealthy-sam-pic.png"}
                         blurb={"Top-down roguelike stealth game"}
                         skills={["C++", "OpenGL"]}
                         link={"https://github.com/scveloso/Stealthy-Sam"}
            />
            <br/>
            <ProjectItem name={"Room8"}
                         imgPath={"/project-thumbnails/room8-pic.png"}
                         blurb={"Roommate organization Android app"}
                         skills={["Java", "Android", "Firebase"]}
                         link={"https://github.com/ubclaunchpad/Room8"}
            />
            <br/>
            <ProjectItem name={"Alternative Tweets"}
                         imgPath={"/project-thumbnails/alternative-tweet-pic.png"}
                         blurb={"Real or fake twitter message web game"}
                         skills={["HTML", "CSS", "JavaScript", "Python"]}
                         link={"https://github.com/nwSnacks/AlternativeTweets"}
            />
        </Content>
    </Layout>
)

export default Projects