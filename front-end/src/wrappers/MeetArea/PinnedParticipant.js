import React from 'react';
import styled from 'styled-components';

import Nameplate from '../../components/Nameplate/Nameplate';
import IconOnlyButton from '../../components/Buttons/IconOnlyButton';
import MIMaximize from '../../components/Icons/MIMaximize';

import sampleVideo from '../../assets/videos/sampleVideo.mp4';
import MIRecordingRing from '../../components/Icons/MIRecordingRing';

const PinnedParticipant = () => {
  return (
    <Wrapper>
      <video src={sampleVideo} autoPlay key={"123-456"}></video>

      <div className='pinned-participant-controls-wrapper'>
        {/* recording - indicator */}
        <div className="recording-indicator bg-black-blur-30">
          <MIRecordingRing />
          <span>24:01:45</span>
        </div>

        {/* maximize */}
        <IconOnlyButton
          size="large"
          mode="switch"
          control={true}
          onClick={()=>{}}
          on={{ icon : <MIMaximize /> }}
          off={{ icon : <MIMaximize /> }}
          className="maximize-btn bg-black-blur-30"
        />
        {/* name */}
        <Nameplate
          size="large"
          label={"Dianne Russell"}
          className="pinned-participant-nameplate"
        />

        {/* audio visualizer */}
         <IconOnlyButton
          size="large"
          mode="switch"
          control={true}
          onClick={()=>{}}
          on={{ icon : <MIMaximize /> }}
          off={{ icon : <MIMaximize /> }}
          className="audio-visualizer bg-black-blur-30"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--black);
  margin-bottom: 1.60rem;
  border-radius: 1.30rem;
  
  aspect-ratio: 16/9; 

  video{
    object-fit: cover;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }

  position: relative;

  .pinned-participant-controls-wrapper{
    height: 100%;
    width: 100%;
    
    position: absolute;
    top: 0;
    left: 0;
  }

  .pinned-participant-nameplate{
    width: fit-content;
    max-width: 360px;

    position: absolute;
    bottom: 1.35rem;
    left: 1.18rem;
  }

  .maximize-btn{
    position: absolute;
    top: 1.12rem;
    right: 1.30rem;
  }

  .audio-visualizer{
    position: absolute;
    bottom: 1.35rem;
    right: 1.18rem;
  }

  .recording-indicator{
    padding: .5rem 1.2rem .5rem .5rem;
    border-radius: 1.60rem;

    display: flex;
    column-gap: 1rem;
    align-items: center;

    position: absolute;
    top: 1.3rem;
    left: 1.12rem;

    color: var(--white);
    font-family: var(--primary-ff);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
  }

`
export default PinnedParticipant;