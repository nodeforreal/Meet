import React from 'react';
import styled, { css } from 'styled-components';

// import sampleImage from "../../assets/images/Card/man-with-headset-video-call.png";
import sampleVideo from '../../assets/videos/sampleVideo.mp4'

const GridParticipants = (props) => {
  return (
    <Wrapper $isAnyParticipantPinned={props.isAnyParticipantPinned}>
      {
        Array.from({ length: 20 }).map((item, key) => {
          return (
            <div key={`participants-video-${key}`} className='participants-video-wrapper'>
              <video autoPlay src={sampleVideo} >
                <source src={sampleVideo} type='video/mp4' />
              </video>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: 0.69219rem;
  
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
    video{
      width: 18.55063rem;
      height: 11.33069rem;
      
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
          height: 0.25rem;
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