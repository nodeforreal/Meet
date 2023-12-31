
const MIVideoCameraOn = ({ strokeColor, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 16}
      height={size ? size : 16}
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.53 20.92H6.21c-3.16 0-4.21-2.1-4.21-4.21V8.29c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21Z"
      />
      <path
        stroke={strokeColor ? strokeColor : "#0060FF"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.52 17.6-2.78-1.95V9.34l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM11.5 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  )
}

export default MIVideoCameraOn
