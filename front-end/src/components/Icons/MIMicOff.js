
function MIMicOff({ strokeColor }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={25}
      fill="none"
    >
      <path
        stroke={strokeColor ? strokeColor : "#EB5757"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 6.8v-.3c0-2.21-1.79-4-4-4s-4 1.79-4 4v5M9.04 14.69C9.77 15.5 10.83 16 12 16c2.21 0 4-1.79 4-4v-.5"
      />
      <path
        stroke={strokeColor ? strokeColor : "#EB5757"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.78 17.45a7.656 7.656 0 0 0 12.87-5.6v-1.7M4.35 10.15v1.7c0 1.06.21 2.06.6 2.98M20.07 3.34 3.93 19.49M11 3.5v3M12 19.5v3"
      />
    </svg>
  )
}

export default MIMicOff