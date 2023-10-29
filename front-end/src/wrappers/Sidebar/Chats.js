import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CircledProfile from '../../components/Profile/CircledProfile';

import sampleImage from '../../assets/images/Card/man-with-headset-video-call.png';
import MILoaderEllipsis from '../../components/Icons/MILoaderEllipsis';


const chatData = [
  {
    userName: 'Kathryn Murphy ',
    id: '123',
    message: 'Good afternoon, everyone.',
    time: '11:01 AM',
    profileImage: sampleImage
  },
  {
    userName: 'Kathryn Murphy ',
    id: '123',
    message: 'We will start this meeting',
    time: '11:02 AM',
    profileImage: sampleImage
  },
  {
    userName: 'Joshua Abraham',
    id: '456',
    message: 'Yes, Let’s start this meeting',
    time: '11:02 AM',
    profileImage: sampleImage
  },
  {
    userName: 'Kathryn Murphy ',
    id: '123',
    message: 'Today, we are here to discuss last week’s sales.',
    time: '11:02 AM',
    profileImage: sampleImage
  }
]



const Chats = () => {
  const [chat, setChat] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {

    if (index === chatData.length) return;
    let interval = setTimeout(() => {
      const obj = {
        messageOnly: true,
        showTime: true
      }

      if (chat.length > 0) {
        const previous = chat[chat.length - 1]
        if (previous.id === chatData[index].id) {
          obj.messageOnly = false
        }
        if (previous.time === chatData[index].time) {
          obj.showTime = false
        }
      }
      setChat([...chat, { ...chatData[index], ...obj }])
      setIndex(index + 1)
    }, 0);

    return () => {
      clearTimeout(interval)
    }

  }, [index])


  return (
    <Wrapper>
      {
        chat.map((data, index) => {
          const { profileImage, userName, message, time, messageOnly, showTime } = data
          return (
            <MessageWrapper $messageOnly={messageOnly} key={`${data.id}${index}`}>
              {messageOnly ? <CircledProfile image={profileImage} /> : <div></div>}
              <article className='message-template'>
                {messageOnly && <p className='user-name'>{userName}</p>}
                <p className='text'>{message}</p>
              </article>
              {showTime ? <span className='time'>{time}</span> : <span></span>}
            </MessageWrapper>
          )
        })
      }
      <div className='flex-center spacer-ellipsis'>
        <MILoaderEllipsis />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1.75rem 1.5rem;
  height: 100%;
  overflow-y: scroll; 
  
  &::-webkit-scrollbar{
    display: none;
  }

  .spacer-ellipsis{
    margin-top: 1rem;
    /* margin-bottom: 1.75rem; */
  }
`

const MessageWrapper = styled.section`
  display: grid;
  grid-template-columns: 3.4375rem minmax(0, 1fr) 3rem;
  column-gap: 1.5rem;

  .message-template{
    margin-bottom: 0.75rem;
    padding: ${({ $messageOnly }) => {
    return $messageOnly ? "0rem 0.84375rem 0.5625rem 0.84375rem" : "0.56rem 0.36rem"
  }};

    border-radius: 0.625rem;
    background: var(--primary-clr);
  }

  .user-name{
    color: var(--secondary-text-clr);
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.76044rem; 
  }

  .text{
    color: var(--primary-text-clr);
    font-family: Inter;
    font-size: 0.95631rem;
    font-style: normal;
    font-weight: 500;
    /* line-height: 1.83756rem; */
  }

  .time{
    color: var(--secondary-text-clr);
    font-family: var(--primary-ff);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.38438rem;
  }

`


export default Chats