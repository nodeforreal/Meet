import React from 'react';
import styled from 'styled-components';

import MILink from '../../components/Icons/MILink';

const MeetLink = () => {
  return (
    <Wrapper>
      <MILink strokeColor="var(--accent-blue-clr)" />
      {"| cem-jnmt-hsu"}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  padding: 0.625rem 0.875rem ;
  border-radius: 6rem;
  background-color: var(--secondary-clr) ;

  display: flex;
  column-gap: 4px;
  align-items: center;

  color: #0060FF;
  font-family: var(--primary-ff);
  font-size: .6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`
export default MeetLink