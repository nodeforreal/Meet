import React from 'react'
import styled from 'styled-components';

const IconButton = ({ label, icon }) => {
  return (
    <Wrapper>
      {label}
      {icon}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 3.8125rem;
  background: var(--secondary-clr);

  display: flex;
  column-gap: 0.62rem;
  align-items: center;

  color: var(--accent-blue-clr);
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`

export default IconButton