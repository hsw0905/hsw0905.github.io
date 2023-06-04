import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 250px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent = function () {
  return (
      <Background>
          <Wrapper>
              <ProfileImage />
              <div>
                  <SubTitle>Dev log</SubTitle>
                  <Title>적다보면 이해되는 이야기</Title>
              </div>
          </Wrapper>
      </Background>
 )
}

export default Introduction