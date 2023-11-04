import React from 'react';
import styled from 'styled-components';

import CircledProfile from '../../components/Profile/CircledProfile';
import IconOnlyButton from '../../components/Buttons/IconOnlyButton';

import sampleImage from '../../assets/images/Card/man-with-headset-video-call.png';
import MIMicOn from '../../components/Icons/MIMicOn';
import MIMicOff from '../../components/Icons/MIMicOff';
import MIVideoCameraOn from '../../components/Icons/MIVideoCameraOn';
import MIVideoCameraOff from '../../components/Icons/MIVideoCameraOff';

const Participants = () => {
  return (
    <Wrapper>
      <div className='scroll-wrapper'>
        {
          Array.from({ length: 8 }).map((data, index) => {
            return (
              <ListItemWrapper key={index}>
                <div className='participant-info'>
                  <CircledProfile image={sampleImage} alt="me" />
                  <p className='participant-name'>Dianne Russell</p>
                </div>
                <div className='action-btns'>
                  <IconOnlyButton
                    size="fit-content"
                    mode="switch"
                    control={true}
                    on={{ icon: <MIMicOn />}}
                    off={{ icon: <MIMicOff /> }}
                  />
                  <IconOnlyButton
                    size="fit-content"
                    mode="switch"
                    control={false}
                    on={{ icon: <MIVideoCameraOn />}}
                    off={{ icon: <MIVideoCameraOff /> }}
                  />
                </div>
              </ListItemWrapper>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1.87rem 1.70rem ;

  .scroll-wrapper{
    height: 100%;
    padding-right: 1.30rem;

    display: flex;
    flex-direction: column;
    row-gap: 0.94rem;
    
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
      width: 0.1875rem;
    }

    &::-webkit-scrollbar-track{
      background-color: var(--primary-clr);
      border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb{
      background-color: var(--accent-blue-clr);
      border-radius: 0.25rem;
    }
  }
`

const ListItemWrapper = styled.div`
  padding: 0.375rem 1rem 0.375rem 0.5rem;
  background-color: var(--primary-clr);
  border-radius: 1.96875rem;

  display: flex;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;

  .participant-info{
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .action-btns{
    display: flex;
    column-gap: 1rem;
  }

  .participant-name{
    color: var(--primary-text-clr);
    font-family: var(--primary-ff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.04169rem;
  }
`

export default Participants