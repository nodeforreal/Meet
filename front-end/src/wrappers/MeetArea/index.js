import React, { useState } from "react";
import styled, { css } from "styled-components";

import GridParticipants from "./GridParticipants";
import PinnedParticipant from "./PinnedParticipant";


const MeetArea = () => {
  // temp pinned state
  // eslint-disable-next-line no-unused-vars
  const [isAnyParticipantPinned, setIsAnyParticipantPinned] = useState(true)

  return (
    <Wrapper $isAnyVideoPinned={isAnyParticipantPinned} onClick={() => setIsAnyParticipantPinned(!isAnyParticipantPinned)}>
      {isAnyParticipantPinned && <PinnedParticipant />}
      {<GridParticipants isAnyParticipantPinned={isAnyParticipantPinned} />}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  padding: 1.75rem 1.80rem;
  background-color: var(--meet-area-bg-clr);

  

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) 12.75rem;
  row-gap: 1.60rem;


  ${({ $isAnyVideoPinned }) => {
    return !$isAnyVideoPinned &&
      css`
      display: block;

      overflow-y: auto;
      scroll-behavior: smooth;

      &::-webkit-scrollbar{
          width: 0rem;
      }
    
      /*&::-webkit-scrollbar-thumb{
        background-color: var(--accent-blue-clr);
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-track{
        border-radius: 1rem;
        background: var(--secondary-clr);
      } */
    `
  }}

 

`
export default MeetArea