
const MIUpArrow = ({ strokeColor }) => {
  return (
    <svg width="12" height="6" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7L7 1L13 7" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default MIUpArrow