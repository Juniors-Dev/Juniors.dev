import { getPhoneCountryOption, phoneCountryOptions } from "./phoneCountryOptions";

function PhoneFieldLabel({ htmlFor, error, required, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`input-field__label ${error ? "input-field__label--error" : ""}`}
    >
      {children}
      {required ? " *" : ""}
    </label>
  );
}

/**
 * Country dial code + flag selector (react-hook-form `register`).
 */
function CountryDialSelect({
  id,
  fieldName,
  register,
  countryLabel,
  phoneCountryLabel,
  selectedCountry,
}) {
  function optionTitle(code) {
    const meta = phoneCountryOptions.find((c) => c.value === code);
    return countryLabel[code] || meta?.dialCode || "";
  }
  return (
    <div className="phone-field__country flex min-w-0 shrink-0 items-center gap-1">
      <span className="phone-field__flag" aria-hidden="true">
        <img src={selectedCountry.flagSrc} alt="" />
      </span>
      <select
        id={id}
        className="phone-field__country-select"
        aria-label={`${phoneCountryLabel}: ${optionTitle(selectedCountry.value)}`}
        title={optionTitle(selectedCountry.value)}
        {...register(fieldName)}
      >
        {phoneCountryOptions.map((c) => (
          <option key={c.value} value={c.value} title={optionTitle(c.value)}>
            {c.dialCode}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Phone field with country dropdown and national number input (react-hook-form).
 *
 * Registers `phoneCountryFieldName` and `phoneFieldName` on the same form.
 *
 * @param {object} props
 * @param {"underlined"|"boxed"} [props.variant="underlined"]
 * @param {"neutral"|"yellow"} [props.boxedTone="neutral"] — when `variant="boxed"`
 * @param {"ring"|"none"|"navy"} [props.boxedBorder="ring"] — when `variant="boxed"`
 * @param {string} [props.placeholder]
 * @param {string} [props.phoneFieldName="phone"]
 * @param {string} [props.phoneCountryFieldName="phoneCountry"]
 * @param {boolean} [props.required=true]
 */
function PhoneNumberInput({
  register,
  watch,
  errors,
  touchedFields,
  isSubmitted,
  labels: { phone: phoneLabel, phoneCountry: phoneCountryLabel, countryNO, countryGB },
  variant = "underlined",
  boxedTone = "neutral",
  boxedBorder = "ring",
  placeholder = "",
  phoneFieldName = "phone",
  phoneCountryFieldName = "phoneCountry",
  required = true,
  className = "",
}) {
  const inputId = phoneFieldName;
  const countrySelectId = `${phoneCountryFieldName}-select`;

  const phoneValue = watch(phoneFieldName);
  const phoneCountryValue = watch(phoneCountryFieldName);
  const selectedPhoneCountry = getPhoneCountryOption(phoneCountryValue);
  const countryLabel = { no: countryNO, gb: countryGB };

  const phoneError = errors[phoneFieldName];
  const touched = touchedFields[phoneFieldName];
  const hasValue = String(phoneValue || "").trim().length > 0;
  const showSuccess = !phoneError && (touched || isSubmitted) && hasValue;

  const stateClass = phoneError
    ? "input-field__control--error"
    : showSuccess
      ? "input-field__control--success"
      : hasValue
        ? "input-field__control--filled"
        : "input-field__control--default";

  const controlClass = [
    "input-field__control",
    "phone-field__control",
    "flex min-w-0 items-center gap-2 ps-3",
    variant === "boxed" ? "phone-field__control--boxed" : "",
    variant === "boxed" && boxedTone === "yellow" ? "phone-field__control--boxed-yellow" : "",
    variant === "boxed" && boxedTone === "neutral" ? "phone-field__control--boxed-neutral" : "",
    variant === "boxed" && boxedBorder === "none" ? "phone-field__control--boxed-border-none" : "",
    variant === "boxed" && boxedBorder === "navy" ? "phone-field__control--boxed-border-navy" : "",
    stateClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`input-field ${className}`}>
      <PhoneFieldLabel htmlFor={inputId} error={!!phoneError} required={required}>
        {phoneLabel}
      </PhoneFieldLabel>

      <div className={controlClass}>
        <CountryDialSelect
          id={countrySelectId}
          fieldName={phoneCountryFieldName}
          register={register}
          countryLabel={countryLabel}
          phoneCountryLabel={phoneCountryLabel}
          selectedCountry={selectedPhoneCountry}
        />
        <input
          id={inputId}
          type="tel"
          autoComplete="tel-national"
          placeholder={placeholder || undefined}
          className="input-field__input min-w-0 flex-1 ps-0"
          aria-invalid={phoneError ? "true" : undefined}
          aria-describedby={phoneError ? `${inputId}-error` : undefined}
          {...register(phoneFieldName)}
        />
        {showSuccess && !phoneError ? (
          <span className="input-field__icon" aria-hidden="true">
            ✓
          </span>
        ) : null}
      </div>

      <div className="h-4.5">
        {phoneError ? (
          <p id={`${inputId}-error`} className="input-field__error">
            {phoneError.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default PhoneNumberInput;
