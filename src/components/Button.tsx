const Button = ({
  className,
  text,
  icon,
  onClick,
  disabled,
}: {
  className?: string;
  text?: string;
  icon?: boolean;
  onClick?: any;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${className} cursor-pointer  rounded-xl py-[10px] px-[20px] flex justify-center items-center gap-2`}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { cursor: 'not-allowed' } : {}}
    >
      {text}
      {icon && (
        <div>
          <img src="/assets/svg/arrowright.svg" alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
