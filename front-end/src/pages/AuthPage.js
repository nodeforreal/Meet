import React from 'react';
import styled from 'styled-components';

import Authentication from '../wrappers/Authentication'
import peopleImage from '../assets/images/people.jpeg'


const AuthPage = () => {
  return (
    <Wrapper>
      <Authentication />
      <section className='auth-column-right'></section>
    </Wrapper>
  )
}


const Wrapper = styled.main`
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  
  .auth-column-right{
    background-image: url(${peopleImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (max-width: 790px) {
    .auth-column-right{
      display: none;
    }

    grid-template-columns: 1fr;
  }
`

export default AuthPage;