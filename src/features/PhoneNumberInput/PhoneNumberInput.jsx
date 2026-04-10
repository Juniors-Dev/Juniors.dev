import { getPhoneCountryOption, phoneCountryOptions } from "./phoneCountryOptions";

/**
 * Phone field with country dropdown and national number input (react-hook-form).
 *
 * Expects `phoneCountry` and `phone` registered on the same form.
 */
function PhoneNumberInput({
  register,
  watch,
  errors,
  touchedFields,
  isSubmitted,
  labels: { phone: phoneLabel, phoneCountry: phoneCountryLabel, countryNO, countryGB },
}) {
  const phoneValue = watch("phone");
  const phoneCountryValue = watch("phoneCountry");
  const selectedPhoneCountry = getPhoneCountryOption(phoneCountryValue);
  const countryLabel = { no: countryNO, gb: countryGB };

  const phoneControlClass = [
    "input-field__control",
    "phone-field__control flex items-center gap-2 ps-3",
    errors.phone
      ? "input-field__control--error"
      : !errors.phone && (touchedFields.phone || isSubmitted) && String(phoneValue || "").trim()
        ? "input-field__control--filled"
        : "input-field__control--default",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-field">
      <label
        htmlFor="phone"
        className={`input-field__label ${errors.phone ? "input-field__label--error" : ""}`}
      >
        {phoneLabel} *
      </label>
      <div className={phoneControlClass}>
        <div className="phone-field__country flex shrink-0 items-center gap-1">
          <span className="phone-field__flag" aria-hidden="true">
            <img src={selectedPhoneCountry.flagSrc} alt="" />
          </span>
          <select
            id="phoneCountry"
            className="phone-field__country-select"
            aria-label={`${phoneCountryLabel}: ${countryLabel[selectedPhoneCountry.value]}`}
            title={countryLabel[selectedPhoneCountry.value]}
            {...register("phoneCountry")}
          >
            {phoneCountryOptions.map((c) => (
              <option key={c.value} value={c.value} title={countryLabel[c.value]}>
                {c.dialCode}
              </option>
            ))}
          </select>
        </div>
        <input
          id="phone"
          type="tel"
          autoComplete="tel-national"
          className="input-field__input min-w-0 flex-1 ps-0"
          aria-invalid={errors.phone ? "true" : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {!errors.phone &&
        (touchedFields.phone || isSubmitted) &&
        String(phoneValue || "").trim() ? (
          <span className="input-field__icon" aria-hidden="true">
            ✓
          </span>
        ) : null}
      </div>
      <div className="h-4.5">
        {errors.phone ? (
          <p id="phone-error" className="input-field__error">
            {errors.phone.message}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default PhoneNumberInput;
