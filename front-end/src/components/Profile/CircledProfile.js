import React from 'react';
import styled from 'styled-components';

const CircledProfile = ({ image, alt, className }) => {
  return (
    <Wrapper className={className || ''}>
      <img src={image} alt={alt} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.125rem;
  border-radius: 100%;
  background-color: var(--primary-clr);

  flex-shrink: 0;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`

export default CircledProfile