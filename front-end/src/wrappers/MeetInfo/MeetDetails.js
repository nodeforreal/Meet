import React from 'react';
import styled from 'styled-components';

const MeetDetails = () => {
  return (
    <Wrapper>
      <h3>[Internal] Weekly Report Marketing + Sales</h3>
      <p>June 12th, 2022 | 11:00 AM</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  min-width: 100px;
  max-width: 560px;
  
  h3{
    margin-bottom: 0.62rem;
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  p{
    color: var(--secondary-text-clr);
    font-family: var(--primary-ff);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default MeetDetails;