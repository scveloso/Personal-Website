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
            <ExperienceItem title={'Software Engineer Intern'}
                            date={'May 2019 - Aug 2019'}
                            logoImgPath={'/company-logos/netapp-logo.png'}
                            company={'NetApp'}
                            blurb={'During my time as a Software Engineer for NetApp\'s StorageGRID, I implemented new features that aid StorageGRID integration with third-party services as well as bug fixes within the main storage component. Technologies used are C++, Go and Ruby for the backend, and JavaScript and angular on the frontend.'}
            />
            <Divider/>

            <ExperienceItem title={'Software Developer Co-op'}
                            date={'May 2018 - Dec 2018'}
                            logoImgPath={'/company-logos/copperleaf-logo.png'}
                            company={'Copperleaf'}
                            blurb={'Worked as a Software Developer on Copperleaf\'s Predictive Analytics team where I implemented customization of analytics through custom entities as well as a customer-specific feature. Developed application backend in C#, crafted database changes in SQL, and designed frontend in TypeScript.'}
            />
            <Divider/>

            <ExperienceItem title={'Junior Support Engineer'}
                            date={'Jan 2017 - Aug 2017'}
                            logoImgPath={'/company-logos/samsung-logo.png'}
                            company={'Samsung'}
                            blurb={'As a Support Engineer, I collaborated with developers to troubleshoot and debug client issues, improved workflows with Android apps and created Android apps to showcase Samsung MDM SDKs.'}
            />
            <Divider/>

            <ExperienceItem title={'CS Teaching Assistant'}
                            date={'Sep 2016 - Dec 2016'}
                            logoImgPath={'/company-logos/ubc-logo.png'}
                            company={'UBC'}
                            blurb={'Assisted in teaching a second year Computer Science course: Software Construction. Held office hours, programming labs and taught students Object-oriented programming in Java. '}
            />
        </Content>
    </Layout>
)

export default Experience