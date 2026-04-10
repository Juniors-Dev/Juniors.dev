import { ChevronDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { getPhoneCountryOption, phoneCountryOptions } from "./phoneCountryOptions.js";

/**
 * @param {import("react-hook-form").FieldError | undefined} err
 * @returns {string | undefined}
 */
function fieldErrorText(err) {
  if (!err) return undefined;
  const { message } = err;
  if (typeof message === "string" && message.length > 0) return message;
  return undefined;
}

/**
 * Minimal underlined phone field: label, flag + country dial selector, number input, single bottom border.
 *
 * @param {object} props
 * Prefer wrapping the form with react-hook-form `FormProvider` so this component can use `useFormContext()` and keep `formState.errors` in sync. Otherwise pass `register`, `watch`, `errors`, `touchedFields`, and `isSubmitted` manually.
 *
 * @param {import("react-hook-form").UseFormRegister<any>} [props.register]
 * @param {import("react-hook-form").UseFormWatch<any>} [props.watch]
 * @param {import("react-hook-form").FieldErrors<any>} [props.errors]
 * @param {import("react-hook-form").FieldNamesMarkedBoolean<any>} [props.touchedFields]
 * @param {boolean} [props.isSubmitted]
 * @param {{
 *   phone: string,
 *   phoneCountry: string,
 *   countryNO: string,
 *   countryGB: string,
 * }} props.labels
 * @param {string} [props.placeholder=""]
 * @param {string} [props.phoneFieldName="phone"]
 * @param {string} [props.phoneCountryFieldName="phoneCountry"]
 * @param {boolean} [props.required=true]
 * @param {"underlined"|"boxed"} [props.variant="underlined"]
 * @param {boolean} [props.boxedOnFocus=true] When variant is underlined, use boxed styling while the control is focused.
 * @param {"neutral"|"yellow"} [props.boxedTone="neutral"]
 * @param {"ring"|"none"|"navy"} [props.boxedBorder="ring"]
 * @param {string} [props.className=""]
 */
function PhoneNumberInput({
  register: registerProp,
  watch: watchProp,
  errors: errorsProp,
  touchedFields: touchedFieldsProp,
  isSubmitted: isSubmittedProp,
  labels,
  placeholder = "",
  phoneFieldName = "phone",
  phoneCountryFieldName = "phoneCountry",
  required = true,
  variant = "underlined",
  boxedOnFocus = true,
  boxedTone = "neutral",
  boxedBorder = "ring",
  className = "",
}) {
  const ctx = useFormContext();
  const register = ctx?.register ?? registerProp;
  const watch = ctx?.watch ?? watchProp;
  /**
   * Prefer props from the parent: the parent’s `useForm()` call subscribes to `formState`, so
   * `errors` updates when the resolver runs. Reading `ctx.formState` only in a child does not
   * reliably subscribe to RHF’s proxied `formState` (errors can stay empty).
   */
  const errors = errorsProp ?? ctx?.formState.errors ?? {};
  const touchedFields = touchedFieldsProp ?? ctx?.formState.touchedFields ?? {};
  const isSubmitted = isSubmittedProp ?? ctx?.formState.isSubmitted ?? false;

  const phoneFieldError = errors[phoneFieldName];
  const countryFieldError = errors[phoneCountryFieldName];
  /** Resolver may attach errors to `phone` or `phoneCountry` (e.g. country refine). */
  const errorMessage = fieldErrorText(phoneFieldError) ?? fieldErrorText(countryFieldError);
  const hasError = Boolean(phoneFieldError || countryFieldError);

  const phoneValue = watch(phoneFieldName);
  const countryCode = watch(phoneCountryFieldName);
  const touched = touchedFields[phoneFieldName] || touchedFields[phoneCountryFieldName];
  const trimmed = String(phoneValue ?? "").trim();
  const hasValue = trimmed.length > 0;
  const showSuccess = !hasError && (touched || isSubmitted) && hasValue;

  const inputId = phoneFieldName;
  const selectId = `${phoneCountryFieldName}-select`;

  const countryLabelByCode = {
    no: labels.countryNO,
    gb: labels.countryGB,
  };

  /**
   * @param {string} code
   */
  function optionLabel(code) {
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
    showSuccess && "phone-field__control--with-trailing-icon",
    showBoxedChrome && "phone-field__control--boxed",
    showBoxedChrome && boxedTone === "neutral" && "phone-field__control--boxed-neutral",
    showBoxedChrome && boxedTone === "yellow" && "phone-field__control--boxed-yellow",
    showBoxedChrome && boxedBorder === "ring" && "phone-field__control--boxed-ring",
    showBoxedChrome && boxedBorder === "none" && "phone-field__control--boxed-none",
    showBoxedChrome && boxedBorder === "navy" && "phone-field__control--boxed-navy",
    showBoxedOnFocus && "phone-field__control--boxed-on-focus",
    hasError
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
        className={`input-field__label ${hasError ? "input-field__label--error" : ""}`}
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
        <div className="phone-field__leading relative inline-flex min-h-10 min-w-0 shrink-0 items-center">
          <select
            {...countryRegister}
            id={selectId}
            className="phone-field__country-select"
            aria-label={labels.phoneCountry}
          >
            {phoneCountryOptions.map((opt) => (
              <option key={opt.code} value={opt.code} title={optionLabel(opt.code)}>
                {`${opt.flagEmoji} ${opt.dialCode}`}
              </option>
            ))}
          </select>
          <span
            className="phone-field__country-display pointer-events-none flex items-center gap-1 text-primary-900"
            aria-hidden
          >
            <img
              src={currentCountry.flagSrc}
              alt=""
              className="phone-field__flag size-6 shrink-0 object-contain"
              width={24}
              height={24}
            />
            <span className="phone-field__dial">{currentCountry.dialCode}</span>
            <ChevronDown
              className="phone-field__chevron size-4 shrink-0"
              aria-hidden
              strokeWidth={2}
            />
          </span>
        </div>

        <input
          {...inputRegister}
          id={inputId}
          type="tel"
          autoComplete="tel-national"
          className="input-field__input phone-field__input min-w-0 flex-1 py-3 pe-0"
          aria-invalid={hasError ? "true" : undefined}
          aria-describedby={errorMessage ? `${inputId}-error` : undefined}
          {...(placeholder ? { placeholder } : {})}
        />

        {showSuccess ? (
          <span className="input-field__icon" aria-hidden="true">
            ✓
          </span>
        ) : null}
      </div>

      <div className="h-4.5">
        {errorMessage ? (
          <p id={`${inputId}-error`} className="input-field__error">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default PhoneNumberInput;
