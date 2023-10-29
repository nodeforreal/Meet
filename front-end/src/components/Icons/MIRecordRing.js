import React from 'react'

const MIRecordRing = ({ strokeColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
      <path
        stroke={strokeColor ? strokeColor : "#EB5757"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.25}
        d="M13.965 25.667c6.443 0 11.667-5.224 11.667-11.667S20.408 2.333 13.965 2.333 2.298 7.557 2.298 14s5.224 11.667 11.667 11.667Z"
      />
      <path
        stroke={strokeColor ? strokeColor : "#EB5757"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2.25}
        d="M14 18.935a4.935 4.935 0 1 0 0-9.87 4.935 4.935 0 0 0 0 9.87Z"
      />
      <circle cx={14} cy={14} r={4} fill={strokeColor ? strokeColor : "#EB5757"} fillOpacity={0.6} />
    </svg>
  )
}

export default MIRecordRing