interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      type={type}
      className={`border border-black px-2  py-1 rounded hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed   ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
