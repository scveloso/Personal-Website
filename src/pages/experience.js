import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceItem from "../components/experience-item"
import styled from "@emotion/styled"
import Divider from '@material-ui/core/Divider';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const Experience = () => (
    <Layout>
        <SEO title="Experience" />
        <Content>
            <h1>Experience</h1>
            <Divider/>
            <ExperienceItem title={'Software Developer Intern'}
                            date={'May 2019 - Aug 2019'}
                            logoImgPath={'/company-logos/netapp-logo.png'}
                            company={'NetApp'}
                            blurb={'This summer, I\'ll be working with NetApp\'s StorageGRID team. '}
            />
            <Divider/>

            <ExperienceItem title={'Software Developer Co-op'}
                            date={'May 2018 - Dec 2018'}
                            logoImgPath={'/company-logos/copperleaf-logo.png'}
                            company={'Copperleaf'}
                            blurb={'Worked as a Software Developer on Copperleaf\'s Predictive Analytics team where I developed application backend in C#, crafted database changes in SQL, and designed application frontend in TypeScript.'}
            />
            <Divider/>

            <ExperienceItem title={'Junior Support Engineer'}
                            date={'Jan 2017 - Aug 2017'}
                            logoImgPath={'/company-logos/samsung-logo.png'}
                            company={'Samsung'}
                            blurb={'As a Support Engineer, I collaborated with developers to troubleshoot and debug client issues, helped improve workflows with Android apps and created Android apps to showcase Samsung MDM SDKs.'}
            />
            <Divider/>

            <ExperienceItem title={'CS Teaching Assistant'}
                            date={'Sep 2016 - Dec 2016'}
                            logoImgPath={'/company-logos/ubc-logo.png'}
                            company={'UBC'}
                            blurb={'Assisted in teaching a second year Computer Science course: Software Construction. Held office hours, programming labs and taught students about Object-oriented programming in Java. '}
            />
        </Content>
    </Layout>
)

export default Experience