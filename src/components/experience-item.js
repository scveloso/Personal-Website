import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";

const Date = styled.h5`
  display: inline;
  color: #bbb;
`

const ExperienceItemTitle = styled.h3`
  display: inline;
`

const InlineBlockDiv = styled.div`
    display: inline-block;
`

const DateDiv = styled.div`
    display: inline-block;
    margin-left: 10px;
`

const LogoDiv = styled.div`
    display: inline-block;
    margin-right: 10px;
`

const HeaderTextDiv = styled.div`
    display: inline-block;
    margin: auto 0;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
`

const ExperienceItemDiv = styled.div`
    padding-top: 10px;
`

class ExperienceItem extends React.Component {

    render() {
        const { title, date, logoImgPath, company, blurb } = this.props;

        return (
            <ExperienceItemDiv>
                <div>
                    <LogoDiv>
                        <p>
                            <Logo src={logoImgPath} className={'imgsmall'}/>
                        </p>
                    </LogoDiv>
                    <HeaderTextDiv>
                        <div>
                            <InlineBlockDiv>
                                <ExperienceItemTitle>{title}</ExperienceItemTitle>
                            </InlineBlockDiv>
                            <DateDiv>
                                <Date>{date}</Date>
                            </DateDiv>
                        </div>
                        <div>
                            <b>{company}</b>
                        </div>
                    </HeaderTextDiv>
                </div>
                <InlineBlockDiv>
                    <p>{blurb}</p>
                </InlineBlockDiv>
            </ExperienceItemDiv>
        )
    }
}

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    logoImgPath: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    blurb: PropTypes.string,
}

export default ExperienceItem
