export function CloseIcon(props: React.SVGProps<SVGSVGElement> & { fillColor?: string }) {
  const { width, height, fillColor = 'currentColor', ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      {...rest}
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
    >
      <path
        fill={fillColor}
        d="M19.645 4.367a1.209 1.209 0 0 0-1.711 0L12 10.29 6.066 4.355a1.208 1.208 0 0 0-1.711 0 1.208 1.208 0 0 0 0 1.711L10.289 12l-5.934 5.934a1.209 1.209 0 0 0 0 1.711 1.209 1.209 0 0 0 1.711 0L12 13.711l5.934 5.934a1.209 1.209 0 0 0 1.711 0 1.209 1.209 0 0 0 0-1.711L13.711 12l5.934-5.934a1.216 1.216 0 0 0 0-1.699Z"
      />
    </svg>
  );
}
