import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';


const TextInput = ({ type, icon, placeholder, label, name, className }) => {

  const [inputValue, setInputValue] = useState('')
  const [showLabel, setShowLabel] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // handle input on focus
  const handleOnFocus = () => {
    setShowLabel(true)
    setIsFocused(true)
  }

  // handle input on blur
  const handleOnBlur = () => {
    !inputValue && setShowLabel(false)
    setIsFocused(false)
  }

  // handle input changes
  const handleOnChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <TextInputWrapper $showLabel={showLabel} className={className || ""} $isFocused={isFocused}>
      <label htmlFor={name} className="label" >{label}</label>
      <div className="input-wrapper">
        <input
          type={type || "text"}
          name={name}
          id={name}
          value={inputValue}
          placeholder={showLabel ? "" : placeholder}
          className="input"
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          autocomplete="off"
        />
        {icon}
      </div>
    </TextInputWrapper>
  )
}

const TextInputWrapper = styled.div`
  height: 3.625rem;
  padding: 1rem;
  border-radius: 1rem;
  /* outline: 1.5px solid ${({ $isFocused }) => $isFocused ? "rgba(0, 98, 255, 0.8)" : "transparent"}; */
  /* box-shadow: ${({ $isFocused }) => $isFocused ? "0 0 0px 6px rgba(0, 98, 255, 0.1)" : "none"} ; */
  background: #F4F6FB;

  display: flex;
  align-items: center;

  position: relative;

  .label{
    display: ${({ $showLabel }) => $showLabel ? "block" : "none"};

    position: absolute;
    top: .5rem;
    left: 1rem;

    /* color: ${({ $isFocused }) => $isFocused ? "rgba(0, 98, 255, 0.8)" : "#ADAEB6"}; */
    color:#ADAEB6 ;
    font-family: var(--primary-ff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.04375rem;
  }

  .input-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: .5rem;
  }

  .input{
    color: var(--black);
    font-family: var(--primary-ff);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.0125rem;

    &::placeholder{
      font-weight: 500;
      font-size: 0.75rem;
      color: #ADAEB6;
    }
  }

`

export default TextInput;