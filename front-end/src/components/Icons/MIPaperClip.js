const MIPaperClip = ({ strokeColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 26 30"
  >
    <path
      stroke={strokeColor ? strokeColor : "#8D8F98"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.962 15v4.375a4.38 4.38 0 0 0 4.375 4.375 4.38 4.38 0 0 0 4.375-4.375V12.5a8.744 8.744 0 0 0-8.75-8.75 8.744 8.744 0 0 0-8.75 8.75V20c0 4.137 3.363 7.5 7.5 7.5"
    />
  </svg>
)
export default MIPaperClip