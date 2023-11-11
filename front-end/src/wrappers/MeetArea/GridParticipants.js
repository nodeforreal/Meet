import React from 'react';
import styled, { css } from 'styled-components';

import Nameplate from '../../components/Nameplate/Nameplate';
import IconOnlyButton from '../../components/Buttons/IconOnlyButton';
import MIMicOn from '../../components/Icons/MIMicOn'
import MIMicOff from '../../components/Icons/MIMicOff'

// import sampleImage from "../../assets/images/Card/man-with-headset-video-call.png";
import sampleVideo from '../../assets/videos/sampleVideo.mp4'

const GridParticipants = (props) => {
  return (
    <Wrapper $isAnyParticipantPinned={props.isAnyParticipantPinned}>
      {
        Array.from({ length: 20 }).map((item, index) => {
          return (
            <div key={`participants-video-${index}`} className='participants-video-wrapper'>
              <video autoPlay src={sampleVideo} >
                <source src={sampleVideo} type='video/mp4' />
              </video>
              <div className="participant-info-wrapper">
                <Nameplate
                  size="medium"
                  label={"Dianne Russell"}
                  className="participant-nameplate"
                />
                <IconOnlyButton
                  size="medium"
                  mode="switch"
                  control={index}
                  onClick={() => {}}
                  on={{
                    icon: <MIMicOn strokeColor="var(--white)" size={16} />,
                    backgroundColor: 'var(--accent-blue-clr)'
                  }}
                  off={{
                    icon: <MIMicOff strokeColor="var(--white)" size={16} />,
                    backgroundColor: 'var(--accent-red-clr)'
                  }}
                />
              </div>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
  ${({ $isAnyParticipantPinned }) => {
    return $isAnyParticipantPinned &&
      css`
        display: flex;
        column-gap: 1.20rem;

        overflow-x: auto;
        overflow-y: hidden;
      `
  }}


  ${({ $isAnyParticipantPinned }) => {
    return !$isAnyParticipantPinned &&
      css`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;

        aspect-ratio: 16/9;
      `
  }}

  .participants-video-wrapper{
    height: fit-content;
    display: grid;
    position: relative;

    .participant-info-wrapper{
      padding: 0 .50rem .50rem;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 2rem;

      position: absolute;
      bottom: 0;
    }

    video{
      width: 12.25rem;
      height: 7.5rem;
      
      border-radius: 0.69219rem;
      object-fit: cover;

      ${({ $isAnyParticipantPinned }) => {
    return !$isAnyParticipantPinned &&
      css`
           width: 100%;
           height: 100%;
         `
  }}
    }
  }

  ${({ $isAnyParticipantPinned }) => {
    return $isAnyParticipantPinned &&
      css`
        &::-webkit-scrollbar{
          height: 0.15625rem;
        }

        &::-webkit-scrollbar-thumb{
          background-color: var(--accent-blue-clr);
          border-radius: 1rem;
        }

        &::-webkit-scrollbar-track{
          border-radius: 1rem;
          background: #DEE1E7;
        }
      `
  }} 
 
`
export default GridParticipants