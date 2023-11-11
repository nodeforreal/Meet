import React from "react";
import styled from "styled-components";

import IconOnlyButton from "../../components/Buttons/IconOnlyButton";
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
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        on={{
          icon: <MIMicOn strokeColor="var(--white)" />,
          backgroundColor: "var(--accent-blue-clr)"
        }}
        off={{
          icon: <MIMicOff strokeColor="var(--white)" />,
          backgroundColor: "var(--accent-blue-clr)"
        }}
      />

      {/* camera */}
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        on={{
          icon: <MIVideoCameraOn strokeColor="var(--white)" />,
          backgroundColor: "var(--accent-blue-clr)"
        }}
        off={{
          icon: <MIVideoCameraOff strokeColor="var(--white)" />,
          backgroundColor: "var(--accent-blue-clr)"
        }}
      />

      {/* screen share */}
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        on={{
          icon: <MIScreenShare strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
        off={{
          icon: <MIScreenShare strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
      />

      {/* record */}
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        on={{
          icon: <MIRecording strokeColor="var(--record-icon-stroke-clr)" />,
          backgroundColor: "var(--accent-light-red-clr)"
        }}
        off={{
          icon: <MIRecording strokeColor="var(--record-icon-stroke-clr)" />,
          backgroundColor: "var(--accent-light-red-clr)"
        }}
      />

      {/* message */}
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        on={{
          icon: <MIMessage strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
        off={{
          icon: <MIMessage strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
      />

      {/* settings */}
      <IconOnlyButton
        size='large'
        mode="switch"
        control={true}
        onClick={handleTheme}
        on={{
          icon: <MIMenuEllipsis strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
        off={{
          icon: <MIMenuEllipsis strokeColor="var(--accent-blue-clr)" />,
          backgroundColor: "var(--secondary-clr)"
        }}
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
  border-top: 1px solid var(--section-border-clr);

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