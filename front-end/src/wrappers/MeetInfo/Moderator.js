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
      <button>
        <MIKebab fillColor="#A2A7B4" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 22.875rem;
  padding: 0.7rem 2.15rem 0.7rem 1rem;
  border-radius: 10rem;
  background-color: var(--accent-light-grey-clr);

  display: flex;
  justify-content: space-between;
  column-gap: 1rem;

  .moderator-info-wrapper{
    display: flex;
    column-gap: 1rem;
  }

  .moderator-name{
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.04169rem;
  }
  .moderator-text{
    color: #9E9E9E;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.27863rem; 
    letter-spacing: 0.02438rem;
  }

`

export default Moderator