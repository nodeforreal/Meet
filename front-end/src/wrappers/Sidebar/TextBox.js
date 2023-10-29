import React from 'react';
import styled from 'styled-components';

import IconToggleButton from '../../components/Buttons/IconToggleButton';

import MIPaperClip from '../../components/Icons/MIPaperClip';
import MISend from '../../components/Icons/MISend';

const TextBox = () => {
  return (
    <Wrapper>
      <div className='text-input-wrapper'>
        <IconToggleButton
          type='secondary'
          mode='normal'
          icon={<MIPaperClip />}
        />
        <input type="text" placeholder='Type Something...' />
        <IconToggleButton
          type='primary'
          mode='normal'
          icon={<MISend />}
          backgroundColor="var(--accent-blue-clr)"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--primary-clr);
  height: var(--text-box-height);

  display: grid;
  place-content: center;

  .text-input-wrapper{
    padding: 0.30rem 0.38rem 0.30rem 1rem;
    border-radius: 5.5rem;
    background-color: var(--accent-light-grey-clr);

    display: flex;
    column-gap: 1.30rem;
    align-items: center;

    input{
      width: auto;
      color: var(--primary-text-clr);
      font-family: Inter;
      font-size: 1rem;
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