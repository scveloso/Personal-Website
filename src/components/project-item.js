import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import { Link } from "gatsby"

const styles = theme => ({
    projectPaper: {
        padding: '20px'
    },
    addButton: {
        margin: "auto",
        display: "block",
    },
    subHeading: {
        marginTop: '40px'
    },
    firstTopHeading: {
        marginTop: '40px'
    },
    topHeading: {
        marginTop: '20px'
    },
    displayTable: {
        width: '100%',
        marginTop: '20px',
    },
    description: {
        marginTop: '20px',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    tableHead: {
        backgroundColor: '#e0e0e0',
        width: '100%',
    }
});

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

const ExperienceItemDiv = styled.div`
    padding-top: 10px;
`

const ProjectImage = styled.img`
    border: 1px solid lightgray;
    border-radius: 5px;
    display: block;
    margin: 0 auto 20px;
`

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 25px;

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

class ProjectItem extends React.Component {

    render() {
        const { classes, name, imgPath, blurb, skills, link } = this.props;

        return (
            <Paper className={classes.projectPaper}>
                <ProjectImage src={imgPath}/>
                <NavLink href={link}>
                    <b>{name}</b>
                </NavLink>
                <br/>
                {blurb}
                <br/>
                {skills.join(" | ")}
            </Paper>
        )
    }
}

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    imgPath: PropTypes.string,
    blurb: PropTypes.string,
    skills: PropTypes.array
}

export default withStyles(styles)(ProjectItem);