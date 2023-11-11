
const MIMessage = ({ strokeColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none">
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2.25}
        d="M9.917 22.167h-.583c-4.667 0-7-1.167-7-7V9.333c0-4.666 2.333-7 7-7h9.333c4.666 0 7 2.334 7 7v5.834c0 4.666-2.334 7-7 7h-.584c-.361 0-.711.175-.933.466l-1.75 2.334c-.77 1.026-2.03 1.026-2.8 0l-1.75-2.334c-.186-.256-.618-.466-.933-.466Z"
      />
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M18.663 12.833h.01M13.995 12.833h.01M9.327 12.833h.01"
      />
    </svg>
  )
}

export default MIMessage