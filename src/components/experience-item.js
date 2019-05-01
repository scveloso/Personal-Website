import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";

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
    padding-bottom: 20px;
`

class ExperienceItem extends React.Component {

    render() {
        const { title, date, logoImgPath, company, blurb } = this.props;

        return (
            <ExperienceItemDiv>
                <div>
                    <FloatLeftDiv>
                        <p>
                            <Logo src={logoImgPath} className={'fadeshow'}/>
                        </p>
                    </FloatLeftDiv>
                    <HeaderTextDiv>
                        <div>
                            <InlineBlockDiv>
                                <MarkerHeader>{title}</MarkerHeader>
                            </InlineBlockDiv>
                            <InlineBlockRightDiv>
                                <Date>{date}</Date>
                            </InlineBlockRightDiv>
                        </div>
                        <div>
                            <b>{company}</b>
                        </div>
                    </HeaderTextDiv>
                </div>
                <FloatLeftDiv>
                    <p>{blurb}</p>
                </FloatLeftDiv>
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
    bullets: PropTypes.array
}

export default ExperienceItem