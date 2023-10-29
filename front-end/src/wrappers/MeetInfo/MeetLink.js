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
  padding: 0.63rem 1.10rem ;
  border-radius: 7.21rem;
  background-color: var(--secondary-clr) ;

  display: flex;
  column-gap: 4px;
  align-items: center;

  color: #0060FF;
  font-family: var(--primary-ff);
  font-size: 1.04281rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`
export default MeetLink