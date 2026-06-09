import SendFill from "../icons/SendFill";

/**
 * Submit button with optional send icon.
 *
 * Forwards all additional props (e.g. disabled, type) to the
 * underlying <button> element.
 */
function SubmitButton({ children, variant = "primary", icon = false, className = "", ...rest }) {
  const classes = `btn btn-${variant} ${icon ? "btn-submit-with-icon" : ""} ${className}`;

  const content = (
    <>
      {icon && (
        <span aria-hidden="true">
          <SendFill className="btn__icon-submit" />
        </span>
      )}
      <span className="btn__label">{children}</span>
    </>
  );

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}

export default SubmitButton;
