import React from 'react';
import styled from 'styled-components';

import CircledProfile from '../../components/Profile/CircledProfile';
import CircledCount from '../../components/Profile/CircledCount';

import sampleImage from '../../assets/images/Card/man-with-headset-video-call.png';

function StackedAvatars() {
  return (
    <Wrapper>
      {
        Array.from({ length: 20 }).slice(0, 4).map((item, index) => {
          return (<CircledProfile image={sampleImage} alt="me" className="avatar" key={index} />)
        })
      }
      {<CircledCount text={'+9'} className="avatar" />}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;

  .avatar{
    margin-left: -14px;
  }
`





export default StackedAvatars