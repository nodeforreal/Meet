import { useMemo, useState } from 'react';
import styled from 'styled-components';

import SidebarMenu from './SidebarMenu';
import IconButton from '../../components/Buttons/IconButton';
import Participants from './Participants';
import ButtonTabs from '../../components/Buttons/ButtonTabs';
import Chats from './Chats';
import TextBox from './TextBox';

import MIAddParticipant from '../../components/Icons/MIAddParticipant';



const Sidebar = () => {

  const [selectedChatTab, setSelectedChatTab] = useState("GROUP")
  const [sidebarLayout, setSidebarLayout] = useState({ participants: true, chats: true })

  // tabs
  const handleChatTabs = ({ type }) => {
    setSelectedChatTab(type)
  }

  // collapse button
  const handleCollapseMenu = ({ type }) => {
    if (type === "PARTICIPANTS") {
      setSidebarLayout({ ...sidebarLayout, participants: !sidebarLayout.participants })
    }
    if (type === "CHATS") {
      setSidebarLayout({ ...sidebarLayout, chats: !sidebarLayout.chats })
    }
  }

  const getSectionHeights = (sidebarLayout) => {
    const height = {
      participantsWrapper: '50%',
      chatsWrapper: '50%',
      participants: 'calc(100% - var(--sidebar-section-bar-height))',
      chats: "calc(100% - var(--sidebar-section-bar-height) - var(--text-box-height))",
    }

    if (sidebarLayout.participants) {
      height.participantsWrapper = sidebarLayout.chats ? "50%" : "calc(100% - var(--sidebar-section-bar-height))"
      height.participants = 'calc(100% - var(--sidebar-section-bar-height))'
    } else {
      height.participantsWrapper = "var(--sidebar-section-bar-height)"
      height.participants = '0'
    }

    if (sidebarLayout.chats) {
      height.chatsWrapper = sidebarLayout.participants ? "50%" : "calc(100% - var(--sidebar-section-bar-height))"
      height.chats = "calc(100% - var(--sidebar-section-bar-height) - var(--text-box-height))"
    } else {
      height.chatsWrapper = 'var(--sidebar-section-bar-height)'
      height.chats = "0"
    }

    return height
  }

  const layout = useMemo(() => {
    return getSectionHeights(sidebarLayout)
  }, [sidebarLayout])

  return (
    <Wrapper id="app-column-two" $layout={layout}>
      <div className='participants-section transition-all-3s'>
        <SidebarMenu
          label="Participants"
          actionBtn={
            <IconButton
              label="Add Participant"
              icon={<MIAddParticipant strokeColor="var(--accent-blue-clr)"
              />}
            />
          }
          handleCollapseMenu={() => handleCollapseMenu({ type: "PARTICIPANTS" })}
        />
        <Participants layout={layout} />
      </div>
      <div className='chat-section transition-all-3s'>
        <SidebarMenu
          label="Chats"
          actionBtn={
            <ButtonTabs
              selectedTab={selectedChatTab}
              buttonList={['Group', 'Personal']}
              handleTab={handleChatTabs}
            />}
          handleCollapseMenu={() => handleCollapseMenu({ type: "CHATS" })}
        />
        <Chats layout={layout} />
        <TextBox />
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  background-color: var(--accent-light-grey-clr);
  border-left: 1.5px solid var(--sidebar-border-clr);

  display: flex;
  flex-direction: column;

  .participants-section{
    height: ${({ $layout }) => $layout.participantsWrapper};
    overflow: hidden;
  }

  .chat-section{
    height: ${({ $layout }) => $layout.chatsWrapper};
    overflow: hidden;
  }
`

export default Sidebar;