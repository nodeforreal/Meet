import React from 'react';
import styled from 'styled-components';

import MeetInfo from '../wrappers/MeetInfo';
import Sidebar from '../wrappers/Sidebar';
import MeetArea from '../wrappers/MeetArea';
import MeetControls from '../wrappers/MeetControls';



const MeetPage = () => {
  return (
    <Wrapper>
      <MeetInfo />
      <section id="app-row-two">
        <section id="app-main-area">
          <MeetArea />
          <MeetControls />
        </section>
        <Sidebar />
      </section>
    </Wrapper>
  )
}


const Wrapper = styled.main`

  display: grid;
  grid-template-rows: var(--meet-info-bar-height)  calc(100vh - var(--meet-info-bar-height));
  grid-template-columns: minmax(0, 1fr);

  #app-row-two{
    background-color: var(--meet-area-bg-clr);
    display: grid;
    grid-template-columns: minmax(0, 1fr)  var(--sidebar-width);
    grid-template-rows: minmax(0 , 1fr);
  }

  #app-main-area{
    display: grid;
    grid-template-rows: minmax(0, 1fr) var(--footer-bar-height);
    
  }
`

export default MeetPage