import React from 'react';
import styled from 'styled-components';

const Nameplate = ({ size, label, className }) => {
  return (
    <Wrapper $size={size} className={`text-ellipsis ${className || ""}`}>
      {label}
    </Wrapper>
  )
}


const padding = {
  "large" : "0.51rem 1.83rem",
  "medium" : "0.34rem 1.24rem"
}

const fontSize = {
  "large" : "1.25rem",
  "medium" : "1rem"
}

const Wrapper = styled.div.attrs((props) => ({
  $padding: padding[props.$size] || "auto",
  $fontSize: fontSize[props.$size] || '1rem'
}))`
  padding: ${(props) => props.$padding};
  border-radius: 5.61456rem;
  background: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(4px);

  color: var(--white);
  font-family: var(--primary-ff);
  font-size:  ${(props) => props.$fontSize};
  font-style: normal;
  font-weight: 500;
`

export default Nameplate;