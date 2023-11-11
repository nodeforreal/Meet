
const MIRecordingRing = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="none">
    <circle cx={10} cy={10} r={"0.625rem"} fill="#fff" fillOpacity={0.63} />
    <circle cx={10} cy={10} r={"0.25rem"} fill="#EB5757" />
    <defs>
      <filter
        id="a"
        width="1.25rem" 
        height="1.25rem"
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
