const MIMenuEllipsis = ({ fillColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg/ellipsis" width={18} height={18} viewBox="0 0  28 28" fill="none">
    <path
      fill={fillColor ? fillColor : "#0060FF"}
      d="M14 11.667A2.34 2.34 0 0 0 11.667 14 2.34 2.34 0 0 0 14 16.333 2.34 2.34 0 0 0 16.334 14 2.34 2.34 0 0 0 14 11.667Zm7 0A2.34 2.34 0 0 0 18.667 14 2.34 2.34 0 0 0 21 16.333 2.34 2.34 0 0 0 23.334 14 2.34 2.34 0 0 0 21 11.667Zm-14 0A2.34 2.34 0 0 0 4.667 14 2.34 2.34 0 0 0 7 16.333 2.34 2.34 0 0 0 9.334 14 2.34 2.34 0 0 0 7 11.667Z"
    />
  </svg>
)

export default MIMenuEllipsis