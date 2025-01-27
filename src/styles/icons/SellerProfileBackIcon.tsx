export function SellerProfileBackIcon({
  isRtl = false,
  ...props
}: React.SVGProps<SVGSVGElement> & { isRtl?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={10}
      fill="none"
      style={{
        transform: isRtl ? 'rotate(180deg)' : 'none',
        transition: 'transform 0.3s ease',
      }}
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M5.138 9.286a.607.607 0 0 0 0-.892L1.61 5.054l3.53-3.34a.607.607 0 0 0 0-.892.694.694 0 0 0-.944 0l-4 3.786a.607.607 0 0 0 0 .892l4 3.786c.26.246.683.246.943 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
