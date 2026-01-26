export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 140 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Joint Ops"
    >
      <text
        x="0"
        y="20"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="0.05em"
      >
        JOINT OPS
      </text>
    </svg>
  )
}
