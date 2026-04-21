import SubmitButton from "./SubmitButton";

function FormSubmitButton({
  children,
  loadingLabel = "Submitting...",
  isLoading = false,
  variant = "primary",
  icon = true,
  className = "",
  type = "submit",
  disabled = false,
  ...rest
}) {
  return (
    <SubmitButton
      type={type}
      variant={variant}
      icon={icon}
      className={className}
      disabled={isLoading || disabled}
      aria-busy={isLoading ? "true" : undefined}
      {...rest}
    >
      {isLoading ? loadingLabel : children}
    </SubmitButton>
  );
}

export default FormSubmitButton;
