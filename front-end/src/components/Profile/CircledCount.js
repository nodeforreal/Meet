import React from 'react';
import styled from 'styled-components';

const CircledCount = ({ text, className }) => {
  return (
    <Wrapper className={className || ''}>
      <div>{text}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 3.4375rem;
  height: 3.4375rem;
  padding: 0.1875rem;
  border-radius: 100%;
  background-color: var(--primary-clr);

  div{
    height: 100%;
    width: 100%;
    border-radius: 100%;
    background-color: var(--secondary-clr);

    display: grid;
    place-content: center;

    color: var(--accent-blue-clr);
    font-family: var(--primary-ff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
  }
`

export default CircledCount