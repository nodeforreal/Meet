import React from 'react'

const MIScreenShare = ({ strokeColor }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox='0 0 30 30'>
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="M10.5 25.667h7c5.834 0 8.167-2.334 8.167-8.167v-7c0-5.833-2.334-8.167-8.167-8.167h-7c-5.833 0-8.166 2.334-8.166 8.167v7c0 5.833 2.333 8.167 8.166 8.167Z"
      />
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="m10.5 11.095 3.5-3.5 3.5 3.5M14 7.595v9.333M7 19.262a22.108 22.108 0 0 0 14 0"
      />
    </svg>
  )
}

export default MIScreenShare