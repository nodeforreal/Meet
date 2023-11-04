import React from "react";
import styled from "styled-components";

import IconToggleButton from "../../components/Buttons/IconToggleButton";
import TextButton from "../../components/Buttons/TextButton";

import MIMicOn from '../../components/Icons/MIMicOn';
import MIMicOff from '../../components/Icons/MIMicOff';
import MIVideoCameraOn from '../../components/Icons/MIVideoCameraOn';
import MIVideoCameraOff from '../../components/Icons/MIVideoCameraOff';
import MIScreenShare from "../../components/Icons/MIScreenShare";
import MIRecording from "../../components/Icons/MIRecordRing";
import MIMessage from "../../components/Icons/MIMessage";
import MIMenuEllipsis from "../../components/Icons/MIMenuEllipsis";

const MeetControls = () => {

  const handleTheme = () => {
    const light = document.querySelector('.light-theme')
    const dark = document.querySelector('.dark-theme')

    if (light) {
      light.className = "dark-theme"
    }

    if (dark) {
      dark.className = "light-theme"
    }
  }


  return (
    <Wrapper>
      {/* mic */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIMicOn strokeColor="var(--white)" />}
        offIcon={<MIMicOff strokeColor="var(--white)" />}
        control={true}
        backgroundColor={"var(--accent-blue-clr)"}
      />

      {/* camera */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIVideoCameraOn strokeColor="var(--white)" />}
        offIcon={<MIVideoCameraOff strokeColor="var(--white)" />}
        control={true}
        backgroundColor={"var(--accent-blue-clr)"}
      />

      {/* screen share */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIScreenShare strokeColor="var(--accent-blue-clr)" />}
        offIcon={<MIScreenShare strokeColor="var(--accent-blue-clr)" />}
        control={true}
        backgroundColor={"var(--secondary-clr)"}
      />

      {/* record */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIRecording strokeColor="var(--record-icon-stroke-clr)" />}
        offIcon={<MIRecording strokeColor="var(--record-icon-stroke-clr)" />}
        control={true}
        backgroundColor={"var(--accent-light-red-clr)"}
      />

      {/* message */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIMessage strokeColor="var(--accent-blue-clr)" />}
        offIcon={<MIMessage strokeColor="var(--accent-blue-clr)" />}
        control={true}
        backgroundColor={"var(--secondary-clr)"}
      />

      {/* settings */}
      <IconToggleButton
        type='primary'
        mode="switch"
        onIcon={<MIMenuEllipsis strokeColor="var(--accent-blue-clr)" />}
        offIcon={<MIMenuEllipsis strokeColor="var(--accent-blue-clr)" />}
        control={true}
        backgroundColor={"var(--secondary-clr)"}
        onClick={handleTheme}
      />

      {/* end call */}
      <div className="end-call-btn-wrapper">
        <TextButton
          type="primary"
          backgroundColor="var(--accent-red-clr)"
          label="End Call"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--primary-clr);
  border-top: 1.5px solid var(--section-border-clr);

  display: flex;
  column-gap: 1.25rem;
  align-items: center;
  justify-content: center;

  position: relative;

  .end-call-btn-wrapper{
    position: absolute;
    right: 1.80rem ;
  }
`

export default MeetControls