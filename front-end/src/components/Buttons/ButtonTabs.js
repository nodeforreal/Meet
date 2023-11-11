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
  padding: 0.25rem 0.25rem;
  border-radius: 4rem;

  background-color: var(--secondary-clr);

  display: flex;
  /* column-gap: 0.625rem; */

  button{
    padding: 0.5rem 1.625rem;
    border-radius: 3rem;

    display: grid;
    place-content: center;

    color: var(--accent-blue-clr);
    font-family: var(--primary-ff);
    font-size: 0.6rem;
    font-style: normal;
    font-weight: 600;
  }

  .selected-tab{
    background-color: var(--accent-blue-clr);
    color: var(--white);
  }


`

export default ButtonTabs