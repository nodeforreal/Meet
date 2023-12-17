const MIContactName = ({ strokeColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={14} fill="none" >
    <path
      stroke={strokeColor || "#8F9AAD"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 13h6m-6 0c-.988 0-1.507-.013-1.908-.218a2.001 2.001 0 0 1-.874-.875C1 11.48 1 10.92 1 9.8V4.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C2.52 1 3.08 1 4.2 1h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2.003 2.003 0 0 1-.875.875c-.427.218-.986.218-2.104.218H10m-6 0c0-1.105 1.343-2 3-2s3 .895 3 2m-6 0s0 0 0 0Zm12-4h-4m4-3h-3M7 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
  </svg>
)
export default MIContactName