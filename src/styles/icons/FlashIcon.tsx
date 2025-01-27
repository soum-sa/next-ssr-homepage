export function FlashIcon({ width = '100%', height = '100%', currentColor = '#fff',  ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}

      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <g id="vuesax/linear/flash">
        <g id="flash">
          <path
            id="Vector"
            stroke={currentColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M4.06 9.353h2.06v4.8c0 1.12.607 1.347 1.347.507l5.047-5.733c.62-.7.36-1.28-.58-1.28h-2.06v-4.8c0-1.12-.607-1.347-1.347-.507L3.48 8.073c-.613.707-.353 1.28.58 1.28"
          ></path>
        </g>
      </g>
    </svg>
  );
}
