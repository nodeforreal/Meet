
const MILink = ({ strokeColor }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6963 25.329H23.8818C28.2529 25.329 31.8423 21.754 31.8423 17.3684C31.8423 12.9974 28.2673 9.4079 23.8818 9.4079H21.6963" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.0261 9.4079H10.8551C6.46953 9.4079 2.89453 12.9829 2.89453 17.3684C2.89453 21.7395 6.46953 25.329 10.8551 25.329H13.0261" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5786 17.3684H23.1576" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default MILink