import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import withStyles from '@material-ui/core/styles/withStyles';

import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa'

const styles = ({
    contactContainer: {
        textAlign: 'center'
    },
    logo: {
        width: '50px',
        height: '50px'
    }
});

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 20px;
  margin-bottom: 20px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
 
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

class Contact extends React.Component  {
    render() {
        const { classes } = this.props;

        return (
            <Layout>
                <SEO title="Contact" />
                <Content>
                    <h1>Contact</h1>
                    <div className={classes.contactContainer}>
                        <FaEnvelope className={classes.logo}/>
                        <br/>
                        <NavLink href={"mailto:samtveloso@gmail.com"}>samtveloso@gmail.com</NavLink>
                        <br/>
                        <FaLinkedin className={classes.logo}/>
                        <br/>
                        <NavLink href={"https://www.linkedin.com/in/samuel-veloso/"}>samuel-veloso</NavLink>
                        <br/>
                        <FaGithubSquare className={classes.logo}/>
                        <br/>
                        <NavLink href={"https://www.github.com/scveloso"}>scveloso</NavLink>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default withStyles(styles)(Contact);