import React from 'react'
import styled from 'styled-components';

const IconToggleButton = (props) => {
  const {
    type,
    mode,
    onIcon,
    offIcon,
    icon,
    control,
    onClick,
    backgroundColor,
    className
  } = props


  return (
    <Wrapper onClick={onClick} $backgroundColor={backgroundColor} $type={type} className={className || ""} >
      {(mode === "switch") ?
        (control ? onIcon : offIcon)
        :
        (icon)
      }
    </Wrapper>
  )
}

const Wrapper = styled.button`
  width: ${({ $type }) => {
    return ($type === 'primary') ? '3.125rem' : "auto"
  }};

  height: ${({ $type }) => {
    return ($type === 'primary') ? '3.125rem' : "auto"
  }};

  border-radius: 100%;
  background-color: ${({ $backgroundColor }) => {
    return $backgroundColor || 'transparent'
  }};

  display: grid;
  place-content: center;
`

export default IconToggleButton