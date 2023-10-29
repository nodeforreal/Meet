import React from 'react';
import styled from 'styled-components';

const TextButton = (props) => {
  const {
    type,
    onClick,
    backgroundColor,
    className,
    label
  } = props

  return (
    <Wrapper onClick={onClick} $backgroundColor={backgroundColor} $type={type} className={className || ""} >
      {label}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  height: 60px;
  
  width: fit-content;
  padding: 0 2.30rem;
  border-radius: 4.5625rem;
  background-color: ${({ $backgroundColor }) => {
    return $backgroundColor || 'var(--secondary-clr)'
  }};

  display: grid;
  place-content: center;

  color: ${({ $color, $type }) => {
    return $color || ($type === "primary") ? "var(--white)" : "var(--white)"
  }};

  font-family: var(--primary-ff);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`

export default TextButton