import React from 'react'
import styled from 'styled-components';

const IconOnlyButton = (props) => {
  const {
    size,
    mode,
    on,
    off,
    control,
    onClick,
    backgroundColor,
    icon,
    className
  } = props

  // switch button
  if(mode === 'switch'){
    return (
      <Wrapper
        onClick={onClick}
        $backgroundColor={control ? on.backgroundColor : off.backgroundColor}
        $size={size}
        className={className || ""}
      >
        {(control ? on.icon : off.icon)}
      </Wrapper>
    )
  }

  // normal button
  return (
    <Wrapper
      onClick={onClick}
      $backgroundColor={backgroundColor}
      $size={size}
      className={className || ""}
    >
      {icon}
    </Wrapper>
  )
}

const buttonSize = {
  "large" : "3.125rem",
  "medium" : "2.50rem",
  "small" : ""
}

const Wrapper = styled.button.attrs((props) => ({
  $size: buttonSize[props.$size] || props.$size,
  $backgroundColor: props.$backgroundColor || null
}))`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor };

  display: grid;
  place-content: center;
  flex-shrink: 0;
`

export default IconOnlyButton