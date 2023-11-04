import { useState } from 'react';
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

  const handleChatTabs = ({ type }) => {
    setSelectedChatTab(type)
  }


  return (
    <Wrapper id="app-column-two">
      <div className='participants-section'>
        <SidebarMenu
          label="Participants"
          actionBtn={
            <IconButton
              label="Add Participant"
              icon={<MIAddParticipant strokeColor="var(--accent-blue-clr)"
              />}
            />
          }
        />
        <Participants />
      </div>
      <div className='chat-section'>
        <div className='sidebar-messages-wrapper'>
          <SidebarMenu
            label="Chats"
            actionBtn={
              <ButtonTabs
                selectedTab={selectedChatTab}
                buttonList={['Group', 'Personal']}
                handleTab={handleChatTabs}
              />}
          />
          <Chats />
        </div>
        <TextBox />
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  background-color: var(--accent-light-grey-clr);
  border-left: 1.5px solid var(--sidebar-border-clr);

  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);

  .participants-section{
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .chat-section{
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
  }

  .sidebar-messages-wrapper{
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
`

export default Sidebar;