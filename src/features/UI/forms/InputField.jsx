/**
 * Input field with label and validation states.
 *
 * @param {object} props
 * @param {"input"|"textarea"} [props.as="input"]
 * @param {string} props.label
 * @param {string} props.name
 * @param {string} [props.type="text"]
 * @param {boolean} [props.required=false]
 * @param {string} [props.error]
 * @param {boolean} [props.success=false]
 * @param {string} [props.className=""]
 * @returns {JSX.Element}
 */
function InputField({
  as = "input",
  label,
  name,
  type = "text",
  required = false,
  error = "",
  success = false,
  className = "",
  inputClassName = "",
  ...props
}) {
  const FieldTag = as;
  const inputId = props.id ?? name;
  const hasValue = props.value != null && String(props.value).trim().length > 0;

  const controlClassName = [
    "input-field__control",
    error
      ? "input-field__control--error"
      : success
        ? "input-field__control--success"
        : hasValue
          ? "input-field__control--filled"
          : "input-field__control--default",
    as === "textarea" ? "input-field__control--textarea" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`input-field ${className}`}>
      <label
        htmlFor={inputId}
        className={`input-field__label ${error ? "input-field__label--error" : ""}`}
      >
        {label}
        {required ? " *" : ""}
      </label>

      <div className={controlClassName}>
        <FieldTag
          id={inputId}
          name={name}
          type={as === "input" ? type : undefined}
          className={`input-field__input ${inputClassName}`}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {success && !error ? (
          <span className="input-field__icon" aria-hidden="true">
            ✓
          </span>
        ) : null}
      </div>
      <div className="h-4.5">
        {error ? (
          <p id={`${inputId}-error`} className="input-field__error">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default InputField;
