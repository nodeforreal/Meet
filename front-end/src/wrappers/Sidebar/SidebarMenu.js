import React from 'react';
import styled from 'styled-components';

import MIUpArrow from '../../components/Icons/MIUpArrow';

const SidebarMenu = ({ label, actionBtn, handleCollapseMenu }) => {
  return (
    <Wrapper>
      <div className='label'>{label}</div>
      <div className='action-btn-wrapper'>
        {actionBtn}
        <button className='collapse-btn' onClick={handleCollapseMenu}>
          <MIUpArrow strokeColor="var(--accent-blue-clr)" />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: var(--sidebar-section-bar-height);
  padding: 0 0.875rem 0 1.375rem;
  border-bottom: solid 1px var(--sidebar-section-border-clr);
  background-color: var(--primary-clr);
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label{
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: 0.725rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem;
  }

  .action-btn-wrapper{
    display: flex;
    align-items: center;
    column-gap: 0.625rem;
  }

  .collapse-btn{
    height: fit-content;
  }

`
export default SidebarMenu;