export function NavigateIcon({ isRtl = false, ...props }: React.SVGProps<SVGSVGElement> & { isRtl?: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      style={{
        transform: isRtl ? 'rotate(180deg)' : 'none',
        transition: 'transform 0.3s ease',
      }}
      {...props}
    >
      <rect width="32" height="32" rx="8" transform="matrix(-1 0 0 1 32 0)" fill="#F6F8F8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3661 24.6224C10.878 24.1203 10.878 23.3063 11.3661 22.8042L17.9822 15.999L11.3661 9.19388C10.878 8.69177 10.878 7.8777 11.3661 7.3756C11.8543 6.8735 12.6457 6.8735 13.1339 7.3756L20.6339 15.0899C21.122 15.592 21.122 16.4061 20.6339 16.9082L13.1339 24.6224C12.6457 25.1245 11.8543 25.1245 11.3661 24.6224Z"
        fill="#161042"
      />
    </svg>
  );
}
