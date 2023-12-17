const MIOpenedEye = ({ strokeColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={18} fill="none" viewBox="0 0 22 22">
    <path
      stroke={strokeColor || "#8F9AAD"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
    />
    <path
      stroke={strokeColor || "#8F9AAD"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
)

export default MIOpenedEye