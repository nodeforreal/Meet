import React from 'react';
import styled from 'styled-components';


const ButtonTabs = ({ buttonList, handleTab, selectedTab }) => {
  return (
    <Wrapper>
      {buttonList.map((label, index) => {
        return (
          <button
            className={(selectedTab === label.toUpperCase()) ? "selected-tab" : ""}
            key={`tab-button-${label}-${index}`}
            onClick={() => handleTab({ type: label.toUpperCase() })}
          >
            {label}
          </button>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0.25rem 0.30rem;
  border-radius: 4.4375rem;

  background-color: var(--secondary-clr);

  display: flex;
  /* column-gap: 0.625rem; */

  button{
    padding: 0.625rem 2.5rem;
    border-radius: 3.8125rem;

    display: grid;
    place-content: center;

    color: var(--accent-blue-clr);
    font-family: var(--primary-ff);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.375rem;
  }

  .selected-tab{
    background-color: var(--accent-blue-clr);
    color: var(--white);
  }


`

export default ButtonTabs