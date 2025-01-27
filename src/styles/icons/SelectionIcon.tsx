type SelectionIconProps = {
  isSelected: boolean;
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
};

export const SelectionIcon = ({ isSelected, width = 21, height = 21 }: SelectionIconProps) => {
  return isSelected ? (
    <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <path
        d="M19.7041 10.3984C19.7041 15.369 15.6747 19.3984 10.7041 19.3984C5.73354 19.3984 1.7041 15.369 1.7041 10.3984C1.7041 5.42787 5.73354 1.39844 10.7041 1.39844C15.6747 1.39844 19.7041 5.42787 19.7041 10.3984Z"
        fill="white"
        stroke="#0071F2"
        strokeWidth="2"
      />
      <path
        d="M10.7039 16.2319C13.9256 16.2319 16.5373 13.6202 16.5373 10.3985C16.5373 7.17686 13.9256 4.56519 10.7039 4.56519C7.48228 4.56519 4.87061 7.17686 4.87061 10.3985C4.87061 13.6202 7.48228 16.2319 10.7039 16.2319Z"
        fill="#0071F2"
      />
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <path
        d="M19.7041 10.3984C19.7041 15.369 15.6747 19.3984 10.7041 19.3984C5.73354 19.3984 1.7041 15.369 1.7041 10.3984C1.7041 5.42787 5.73354 1.39844 10.7041 1.39844C15.6747 1.39844 19.7041 5.42787 19.7041 10.3984Z"
        fill="#F6F8F8"
        stroke="#0071F2"
        strokeWidth="2"
      />
    </svg>
  );
};
