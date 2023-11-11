import React from "react";
import styled from "styled-components";

import MeetDetails from "./MeetDetails";
import StackedAvatars from "./StackedAvatars";
import MeetLink from "./MeetLink";
import Moderator from "./Moderator";

import MILogo from '../../components/Icons/MILogo';

const MeetInfo = () => {
  return (
    <Wrapper id="app-row-one">
      <div className="logo">
        <MILogo fillColor={'var(--accent-blue-clr)'} />
      </div>
      <div className="meet-info-wrapper">
        <MeetDetails />
        <div className="right-section">
          <StackedAvatars />
          <MeetLink />
          <Moderator />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-bottom: 1px solid var(--section-border-clr);
  background: var(--primary-clr);
  
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;

  .logo{
    height: 100%;
    padding: 0 45px;
    border-right: 2px solid var(--section-border-clr);

    display: grid;
    place-content: center;
  }

  .meet-info-wrapper{
    padding: 0 1.75rem 0 2.25rem;
    column-gap: 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  .right-section{
    display: flex;
    align-items: center;
    column-gap: 1.7rem;
  }

`


export default MeetInfo