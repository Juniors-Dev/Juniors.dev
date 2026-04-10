/**
 * @param {object} props
 * @param {import("react-hook-form").UseFormRegister<any>} props.register
 * @param {import("react-hook-form").UseFormWatch<any>} props.watch
 * @param {import("react-hook-form").FieldErrors<any>} props.errors
 * @param {import("react-hook-form").FieldNamesMarkedBoolean<any>} props.touchedFields
 * @param {boolean} props.isSubmitted
 * @param {{ email: string }} props.labels
 * @param {"underlined"|"boxed"} [props.variant="underlined"]
 * @param {boolean} [props.boxedOnFocus=true] When variant is underlined, use boxed styling while the control is focused.
 * @param {"neutral"|"yellow"} [props.boxedTone="neutral"]
 * @param {"ring"|"none"|"navy"} [props.boxedBorder="ring"]
 * @param {string} [props.placeholder=""]
 * @param {string} [props.emailFieldName="email"]
 * @param {boolean} [props.required=true]
 * @param {string} [props.className=""]
 */
function EmailInput({
  register,
  watch,
  errors,
  touchedFields,
  isSubmitted,
  labels,
  variant = "underlined",
  boxedOnFocus = true,
  boxedTone = "neutral",
  boxedBorder = "ring",
  placeholder = "",
  emailFieldName = "email",
  required = true,
  className = "",
}) {
  const emailError = errors[emailFieldName]?.message;
  const emailValue = watch(emailFieldName);
  const touched = touchedFields[emailFieldName];
  const trimmed = String(emailValue ?? "").trim();
  const hasValue = trimmed.length > 0;
  const showSuccess = !emailError && (touched || isSubmitted) && hasValue;

  const inputId = emailFieldName;

  const showBoxedChrome = variant === "boxed";
  const showBoxedOnFocus = variant === "underlined" && boxedOnFocus;

  const controlClassName = [
    "input-field__control",
    "email-field__control",
    "email-field__control--no-leading",
    showBoxedChrome && "email-field__control--boxed",
    showBoxedChrome && boxedTone === "neutral" && "email-field__control--boxed-neutral",
    showBoxedChrome && boxedTone === "yellow" && "email-field__control--boxed-yellow",
    showBoxedChrome && boxedBorder === "ring" && "email-field__control--boxed-ring",
    showBoxedChrome && boxedBorder === "none" && "email-field__control--boxed-none",
    showBoxedChrome && boxedBorder === "navy" && "email-field__control--boxed-navy",
    showBoxedOnFocus && "email-field__control--boxed-on-focus",
    emailError
      ? "input-field__control--error"
      : showSuccess
        ? "input-field__control--success"
        : hasValue
          ? "input-field__control--filled"
          : "input-field__control--default",
  ]
    .filter(Boolean)
    .join(" ");

  const inputRegister = register(emailFieldName);

  return (
    <div className={`input-field ${className}`}>
      <label
        htmlFor={inputId}
        className={`input-field__label ${emailError ? "input-field__label--error" : ""}`}
      >
        {labels.email}
        {required ? " *" : ""}
      </label>

      <div
        className={controlClassName}
        {...(showBoxedOnFocus
          ? {
              "data-boxed-tone": boxedTone,
              "data-boxed-border": boxedBorder,
            }
          : {})}
      >
        <input
          {...inputRegister}
          id={inputId}
          type="email"
          autoComplete="email"
          className="input-field__input min-w-0 flex-1 py-3 pe-2"
          aria-invalid={emailError ? "true" : undefined}
          aria-describedby={emailError ? `${inputId}-error` : undefined}
          {...(placeholder ? { placeholder } : {})}
        />

        {showSuccess && !emailError ? (
          <span className="input-field__icon" aria-hidden="true">
            ✓
          </span>
        ) : null}
      </div>

      <div className="h-4.5">
        {emailError ? (
          <p id={`${inputId}-error`} className="input-field__error">
            {emailError}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default EmailInput;
