import React from 'react';
import styled from 'styled-components';

import Nameplate from '../../components/Nameplate/Nameplate';
import IconOnlyButton from '../../components/Buttons/IconOnlyButton';
import MIMaximize from '../../components/Icons/MIMaximize';

import sampleVideo from '../../assets/videos/sampleVideo.mp4';

const PinnedParticipant = () => {
  return (
    <Wrapper>
      <video src={sampleVideo} autoPlay key={"123-456"}></video>

      <div className='pinned-participant-controls-wrapper'>
        {/* maximize */}
        <IconOnlyButton
          size="large"
          mode="switch"
          control={true}
          onClick={()=>{}}
          on={{ icon : <MIMaximize /> }}
          off={{ icon : <MIMaximize /> }}
          className="maximize-btn bg-blur-30"
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
          className="audio-visualizer bg-blur-30"
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
    position: absolute;
    bottom: 1.35rem;
    left: 1.18rem;
  }

`
export default PinnedParticipant;