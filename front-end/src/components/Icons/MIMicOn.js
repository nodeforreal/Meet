
const MIMic = ({ strokeColor }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16C14.21 16 16 14.21 16 12V6.5C16 4.29 14.21 2.5 12 2.5C9.79 2.5 8 4.29 8 6.5V12C8 14.21 9.79 16 12 16Z" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.3501 10.15V11.85C4.3501 16.07 7.7801 19.5 12.0001 19.5C16.2201 19.5 19.6501 16.07 19.6501 11.85V10.15" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6099 6.93C11.5099 6.6 12.4899 6.6 13.3899 6.93" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.2002 9.05001C11.7302 8.91001 12.2802 8.91001 12.8102 9.05001" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19.5V22.5" stroke={strokeColor ? strokeColor : "#0060FF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default MIMic