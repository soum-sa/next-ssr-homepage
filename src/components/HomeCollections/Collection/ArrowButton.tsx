import { LeftArrowIcon } from "@src/styles/icons";

type ArrowButtonProps = {
  buttonClass: string;
  iconClass: string;
  handleClick: () => void;
  ariaLabel: string;
  disabled: boolean;
};

export const ArrowButton = ({
  buttonClass,
  iconClass,
  handleClick,
  ariaLabel,
  disabled,
}: ArrowButtonProps) => {
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <LeftArrowIcon
        role="img"
        className={iconClass}
        aria-label={ariaLabel}
        aria-hidden="true"
      />
    </button>
  );
};
