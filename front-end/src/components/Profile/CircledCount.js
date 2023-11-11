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
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.125rem;
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
    font-size: .6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
  }
`

export default CircledCount