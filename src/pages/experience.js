import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceItem from "../components/experience-item"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Date = styled.h5`
  display: inline;
  color: #bbb;
  margin-bottom: 10px;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
`

const InlineBlockDiv = styled.div`
    display: inline-block;
`

const InlineBlockRightDiv = styled.div`
    display: inline-block;
    margin-left: 10px;
`

const FloatLeftDiv = styled.div`
    display: inline-block;
`

const HeaderTextDiv = styled.div`
    margin-left: 10px;
    display: inline-block;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
`

const ItemHeaderDiv = styled.div`
    margin-bottom: 10px;
`

const Experience = () => (
    <Layout>
        <SEO title="Experience" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
            <h1>Experience</h1>
            <ExperienceItem title={'Software Developer Intern'}
                            date={'May 2019 - Sep 2019'}
                            logoImgPath={'netapp-logo.png'}
                            company={'NetApp'}/>

            <ExperienceItem title={'Software Developer Co-op'}
                            date={'May 2018 - Dec 2018'}
                            logoImgPath={'copperleaf-logo.png'}
                            company={'Copperleaf'}/>

            <ExperienceItem title={'Junior Support Engineer'}
                            date={'Jan 2017 - Aug 2017'}
                            logoImgPath={'samsung-logo.png'}
                            company={'Samsung'}/>
        </Content>
    </Layout>
)

export default Experience