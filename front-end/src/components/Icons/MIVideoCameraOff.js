
const MIVideoCameraOff = ({ strokeColor, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 24}
      height={size ? size : 24}
      fill="none"
    >
      <path
        stroke={strokeColor ? strokeColor : "#EB5757"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.63 8.08s.03-.95 0-1.26c-.17-2.04-1.5-2.74-4.11-2.74H6.21C3.05 4.08 2 5.13 2 8.29v8.42c0 1.26.38 2.53 1.37 3.34l.63.45M16.74 11.45v5.26c0 3.16-1.05 4.21-4.21 4.21H7.26M22 7.24v9.07c0 1.67-1.12 2.25-2.48 1.29l-2.78-1.95M22.02 2.69l-20 20"
      />
    </svg>
  )
}

export default MIVideoCameraOff
