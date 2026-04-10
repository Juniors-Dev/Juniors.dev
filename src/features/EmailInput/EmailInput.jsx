import InputField from "../UI/forms/InputField";

/**
 * Email field matching the homepage contact form: same styling and RHF usage as {@link InputField}.
 * Spread `register("email")` (or another field name) from the parent form.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {boolean} [props.required=false]
 * @param {string} [props.error=""]
 * @param {boolean} [props.success=false]
 * @param {string} [props.className=""]
 */
function EmailInput({
  label,
  required = false,
  error = "",
  success = false,
  className = "",
  ...props
}) {
  return (
    <InputField
      label={label}
      type="email"
      required={required}
      error={error}
      success={success}
      className={className}
      autoComplete="email"
      {...props}
    />
  );
}

export default EmailInput;
