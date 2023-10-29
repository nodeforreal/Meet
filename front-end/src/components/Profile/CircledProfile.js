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
  width: 3.4375rem;
  height: 3.4375rem;
  padding: 0.1875rem;
  border-radius: 100%;
  background-color: var(--primary-clr);

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`

export default CircledProfile