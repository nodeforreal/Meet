import React from 'react';
import styled from 'styled-components';

const Nameplate = ({ size, label, className }) => {
  return (
    <Wrapper 
      $size={size} 
      className={`text-ellipsis bg-black-blur-30 ${className || ""}`}
    >
      {label}
    </Wrapper>
  )
}


const padding = {
  "large" : "0.5rem 1.25rem",
  "medium" : "0.375rem 0.875rem"
}

const fontSize = {
  "large" : "0.695rem",
  "medium" : "0.575rem"
}

const Wrapper = styled.div.attrs((props) => ({
  $padding: padding[props.$size] || "auto",
  $fontSize: fontSize[props.$size] || '1rem'
}))`
  padding: ${(props) => props.$padding};
  border-radius: 6rem;

  color: var(--white);
  font-family: var(--primary-ff);
  font-size:  ${(props) => props.$fontSize};
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`

export default Nameplate;