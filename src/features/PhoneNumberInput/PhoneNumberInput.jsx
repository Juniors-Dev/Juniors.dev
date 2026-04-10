import { ChevronDown } from "lucide-react";

import { getPhoneCountryOption, phoneCountryOptions } from "./phoneCountryOptions.js";

/**
 * @param {object} props
 * @param {import("react-hook-form").UseFormRegister<any>} props.register
 * @param {import("react-hook-form").UseFormWatch<any>} props.watch
 * @param {import("react-hook-form").FieldErrors<any>} props.errors
 * @param {import("react-hook-form").FieldNamesMarkedBoolean<any>} props.touchedFields
 * @param {boolean} props.isSubmitted
 * @param {{
 *   phone: string,
 *   phoneCountry: string,
 *   countryNO: string,
 *   countryGB: string,
 * }} props.labels
 * @param {"underlined"|"boxed"} [props.variant="underlined"]
 * @param {boolean} [props.boxedOnFocus=true] When variant is underlined, use boxed styling while the control is focused.
 * @param {"neutral"|"yellow"} [props.boxedTone="neutral"]
 * @param {"ring"|"none"|"navy"} [props.boxedBorder="ring"]
 * @param {string} [props.placeholder=""]
 * @param {string} [props.phoneFieldName="phone"]
 * @param {string} [props.phoneCountryFieldName="phoneCountry"]
 * @param {boolean} [props.required=true]
 * @param {string} [props.className=""]
 */
function PhoneNumberInput({
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
  phoneFieldName = "phone",
  phoneCountryFieldName = "phoneCountry",
  required = true,
  className = "",
}) {
  const phoneError = errors[phoneFieldName]?.message;
  const phoneValue = watch(phoneFieldName);
  const countryCode = watch(phoneCountryFieldName);
  const touched = touchedFields[phoneFieldName];
  const trimmed = String(phoneValue ?? "").trim();
  const hasValue = trimmed.length > 0;
  const showSuccess = !phoneError && (touched || isSubmitted) && hasValue;

  const inputId = phoneFieldName;
  const selectId = `${phoneCountryFieldName}-select`;

  const countryLabelByCode = {
    no: labels.countryNO,
    gb: labels.countryGB,
  };

  /**
   * @param {string} code
   */
  function optionTitle(code) {
    const label = countryLabelByCode[code];
    const dial = getPhoneCountryOption(code).dialCode;
    return label || dial;
  }

  const currentCountry = getPhoneCountryOption(countryCode);

  const showBoxedChrome = variant === "boxed";
  const showBoxedOnFocus = variant === "underlined" && boxedOnFocus;

  const controlClassName = [
    "input-field__control",
    "phone-field__control",
    showBoxedChrome && "phone-field__control--boxed",
    showBoxedChrome && boxedTone === "neutral" && "phone-field__control--boxed-neutral",
    showBoxedChrome && boxedTone === "yellow" && "phone-field__control--boxed-yellow",
    showBoxedChrome && boxedBorder === "ring" && "phone-field__control--boxed-ring",
    showBoxedChrome && boxedBorder === "none" && "phone-field__control--boxed-none",
    showBoxedChrome && boxedBorder === "navy" && "phone-field__control--boxed-navy",
    showBoxedOnFocus && "phone-field__control--boxed-on-focus",
    phoneError
      ? "input-field__control--error"
      : showSuccess
        ? "input-field__control--success"
        : hasValue
          ? "input-field__control--filled"
          : "input-field__control--default",
  ]
    .filter(Boolean)
    .join(" ");

  const inputRegister = register(phoneFieldName);
  const countryRegister = register(phoneCountryFieldName);

  return (
    <div className={`input-field ${className}`}>
      <label
        htmlFor={inputId}
        className={`input-field__label ${phoneError ? "input-field__label--error" : ""}`}
      >
        {labels.phone}
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
        <div className="phone-field__country flex min-w-0 shrink-0 items-center gap-2">
          <img
            src={currentCountry.flagSrc}
            alt=""
            className="phone-field__flag size-6 shrink-0 object-contain"
            width={24}
            height={24}
          />
          <div className="relative inline-flex min-w-0 items-center">
            <select
              {...countryRegister}
              id={selectId}
              className="phone-field__country-select cursor-pointer"
              aria-label={labels.phoneCountry}
            >
              {phoneCountryOptions.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {optionTitle(opt.code)}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute end-0 top-1/2 size-4 -translate-y-1/2 text-primary-900"
              aria-hidden
              strokeWidth={2}
            />
          </div>
        </div>

        <input
          {...inputRegister}
          id={inputId}
          type="tel"
          autoComplete="tel-national"
          className="input-field__input min-w-0 flex-1 py-3 pe-2"
          aria-invalid={phoneError ? "true" : undefined}
          aria-describedby={phoneError ? `${inputId}-error` : undefined}
          {...(placeholder ? { placeholder } : {})}
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
            {phoneError}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default PhoneNumberInput;
