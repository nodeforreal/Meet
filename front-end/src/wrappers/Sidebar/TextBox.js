import React from 'react';
import styled from 'styled-components';

import IconOnlyButton from '../../components/Buttons/IconOnlyButton';

import MIPaperClip from '../../components/Icons/MIPaperClip';
import MISend from '../../components/Icons/MISend';

const TextBox = ({ layout }) => {
  return (
    <Wrapper $layout={layout} >
      <div className='text-input-wrapper'>
        <IconOnlyButton
          size='medium'
          mode='normal'
          icon={<MIPaperClip />}
          onClick={() => { }}
        />
        <input type="text" placeholder='Type Something...' />
        <IconOnlyButton
          size='large'
          mode='normal'
          icon={<MISend />}
          backgroundColor="var(--accent-blue-clr)"
          onClick={() => { }}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: ${({ $layout }) => $layout.textbox};
  background-color: var(--primary-clr);
  border-top: 1px solid var(--section-border-clr);

  overflow: hidden;
  
  display: grid;
  place-content: center;
  
  transition: height .3s ease-in-out;
  
  .text-input-wrapper{
    padding: 0.30rem 0.38rem 0.30rem 1rem;
    border-radius: 5.5rem;
    background-color: var(--accent-light-grey-clr);

    display: flex;
    column-gap: 1rem;
    align-items: center;

    input{
      width: auto;
      color: var(--primary-text-clr);
      font-family: Inter;
      font-size: 0.725rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.38438rem;

      &::placeholder{
        color: var(--secondary-text-clr);
      }
    }
  }


`

export default TextBox