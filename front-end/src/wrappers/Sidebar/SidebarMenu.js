import React from 'react';
import styled from 'styled-components';

import MIUpArrow from '../../components/Icons/MIUpArrow';

const SidebarMenu = ({ label, actionBtn }) => {
  return (
    <Wrapper>
      <div className='label'>{label}</div>
      <div className='action-btn-wrapper'>
        {actionBtn}
        <button className='collapse-btn'>
          <MIUpArrow strokeColor="var(--accent-blue-clr)" />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0.75rem  1.36rem 0.75rem 2rem;
  border-bottom: solid 1px var(--sidebar-section-border-clr);
  background-color: var(--primary-clr);
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label{
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.04169rem;
  }

  .action-btn-wrapper{
    display: flex;
    column-gap: 1.06rem;
  }


`
export default SidebarMenu;