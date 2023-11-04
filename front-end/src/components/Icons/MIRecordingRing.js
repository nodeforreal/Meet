
const MIRecordingRing = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
    <circle cx={15} cy={15} r={15.141} fill="#fff" fillOpacity={0.63} />
    <circle cx={15} cy={15} r={5.743} fill="#EB5757" />
    <defs>
      <filter
        id="a"
        width={30}
        height={30}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={7.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_29_994"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_29_994"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default MIRecordingRing
