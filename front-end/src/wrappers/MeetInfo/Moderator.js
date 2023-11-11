import React from 'react';
import styled from 'styled-components';

import CircledProfile from '../../components/Profile/CircledProfile';

import sampleImage from '../../assets/images/Card/man-with-headset-video-call.png';
import MIKebab from '../../components/Icons/MIKebab';

const Moderator = () => {
  return (
    <Wrapper>
      <div className='moderator-info-wrapper'>
        <CircledProfile image={sampleImage} alt="i=me" />
        <div>
          <p className='moderator-name'>Adam Joseph</p>
          <p className='moderator-text'>Moderator</p>
        </div>
      </div>
      <button className='moderator-menu-btn'>
        <MIKebab fillColor="#A2A7B4" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 15.125rem;
  padding: 0.5rem 1.5rem 0.5rem 0.625rem;
  border-radius: 10rem;
  background-color: var(--accent-light-grey-clr);

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.625rem;

  .moderator-info-wrapper{
    display: flex;
    column-gap: 0.625rem;
    align-items: center;
  }

  .moderator-name{
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: .725rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2rem;
  }
  .moderator-text{
    color: #9E9E9E;
    font-family: Inter;
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.02438rem;
  }

  .moderator-menu-btn{
    height: fit-content;
    display: grid;
    place-items: center;
  }
`

export default Moderator