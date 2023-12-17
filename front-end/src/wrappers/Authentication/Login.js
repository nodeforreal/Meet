import React, { useState } from 'react';
import styled from 'styled-components';


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
      <h3 className="auth-title">Login<span className="blue-color">.</span></h3>
      <p className="auth-description">Not a member yet? <a href="/register" className="action-btn">Create a Account.</a></p>

      <form className="auth-form-wrapper" autocomplete="off" onSubmit={formOnSubmit} >
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
          <button className="submit-btn" type="submit" >Login</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`

export default Register;