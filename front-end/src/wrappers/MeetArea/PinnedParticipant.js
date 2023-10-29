import React from 'react';
import styled from 'styled-components';

import sampleVideo from '../../assets/videos/sampleVideo.mp4';

const PinnedParticipant = () => {
  return (
    <Wrapper>
      <video src={sampleVideo} autoPlay key={"123-456"}></video>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  margin-bottom: 1.60rem;
  border-radius: 1.30rem;
  
  aspect-ratio: 16/9; 

  video{
    object-fit: cover;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }

`
export default PinnedParticipant;