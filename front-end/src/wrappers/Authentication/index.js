import { useState } from "react";
import styled from "styled-components";

import MILogo from "../../components/Icons/MILogo";

import Register from './Register'
import Login from './Login'

const Authentications = () => {
  // eslint-disable-next-line no-unused-vars
  const [showPassword, setShowPassword] = useState(false)

  const formOnSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <Wrapper>
      <header className="logo-wrapper">
        <MILogo size={66} />
        <h3 className="title">Meet<span className="blue-color">.</span></h3>
      </header>
      <section className="auth-section-wrapper">
        {true ?
          <Register /> : <Login />
        }
      </section>
    </Wrapper>
  )
}




const Wrapper = styled.section`
  .logo-wrapper{
    padding-top: 1rem;
    padding-left: 3.5rem;

    display: flex;
    align-items: center;
    column-gap: 1.60rem;

    .title{
      color: var(--black);
      font-family: var(--primary-ff);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .blue-color{
    color: var(--accent-blue-clr);
  }

  .auth-title{
    margin-bottom: 2rem;

    color: var(--black);
    font-family: var(--primary-ff);
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .auth-description{
    margin-bottom: 2.3rem;

    color: var(--secondary-text-clr);
    font-family: var(--primary-ff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    .action-btn{
      color: var(--accent-blue-clr);
      font-family: var(--primary-ff);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  .auth-section-wrapper{
    padding: 4.5rem 4.5rem  0;

    display: grid;
    place-content: center;

    grid-template-columns: minmax(0, 396px);
  }

  .auth-form-wrapper{
    /* max-width: 436px; */
  }

  .form-name-inputs{
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    column-gap: 1.2rem;
  }

  @media (max-width: 810px) {
    .form-name-inputs{
      flex-direction: column;
      row-gap: 1.2rem;
    }
  }
  
  .form-email-input{
    margin-bottom: 1rem;
  }

  .form-password-input{
    margin-bottom: 1.5rem;
  }


  .form-action-btns{
    display: flex;
    justify-content: end;
  }

  .submit-btn{
    padding: 1rem 2.5rem;
    border-radius: 1.75rem;
    background: var(--accent-blue-clr);

    color: var(--white);

    font-family: var(--primary-ff);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`

export default Authentications;