import React, { useState } from 'react';
import styled from 'styled-components';

import MIContactName from "../../components/Icons/MIContactName";
import MIEmail from "../../components/Icons/MIEmail";
import MIOpenedEye from "../../components/Icons/MIOpenedEye";
import MIClosedEye from '../../components/Icons/MIClosedEye';
import TextInput from './TextInput';
import IconOnlyButton from '../../components/Buttons/IconOnlyButton';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const formOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <h3 className="auth-title">Create a new account<span className="blue-color">.</span></h3>
      <p className="auth-description">Already A Member? <a href="/login" className="action-btn">Log In.</a></p>

      <form className="auth-form-wrapper" autocomplete="off" onSubmit={formOnSubmit} >
        <div className="form-name-inputs">
          <TextInput
            icon={<MIContactName />}
            placeholder="First name"
            label={"First name"}
            name="first-name"
          />
          <TextInput
            icon={<MIContactName />}
            placeholder="Last name"
            label={"Last name"}
            name="last-name"
          />
        </div>
        <TextInput
          className="form-email-input"
          icon={<MIEmail />}
          placeholder="Email"
          label={"Email"}
          name="email"
        />
        <TextInput
          className="form-password-input"
          icon={
            <IconOnlyButton
              mode="switch"
              control={showPassword}
              on={{
                icon: <MIOpenedEye />
              }}
              off={{
                icon: <MIClosedEye />
              }}
              onClick={() => { setShowPassword(!showPassword) }}
            />
          }
          placeholder="Password"
          label={"Password"}
          name="password"
          type={showPassword ? "text" : "password"}
        />
        <div className="form-action-btns">
          <button className="submit-btn" type="submit" >Create account</button>
        </div>
      </form>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  margin: 0 auto;
`

export default Register;