import React from 'react';

interface PaginationArrowProps extends React.SVGProps<SVGSVGElement> {
  isDisabled?: boolean;
}

export function PaginationArrow({ isDisabled = false, ...props }: PaginationArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
      <circle cx={15} cy={15} r={14} stroke="#ECF0F1" />
      <path
        stroke={isDisabled ? '#5B6268' : '#0071F2'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.5 15h-11M14 10.5 9.5 15l4.5 4.5"
      />
    </svg>
  );
}
