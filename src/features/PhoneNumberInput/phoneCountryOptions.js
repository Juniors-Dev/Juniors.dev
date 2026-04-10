import flagNo from "../../assets/emojione_flag-for-norway.png";
import flagGb from "../../assets/emojione_flag-for-united-kingdom.png";

/** @typedef {("no"|"gb")} PhoneCountryCode */

export const phoneCountryCodes = /** @type {const} */ (["no", "gb"]);

export const phoneCountryOptions = [
  { value: "no", dialCode: "+47", flagSrc: flagNo },
  { value: "gb", dialCode: "+44", flagSrc: flagGb },
];

/**
 * @param {string} [value]
 */
export function getPhoneCountryOption(value) {
  return phoneCountryOptions.find((c) => c.value === value) ?? phoneCountryOptions[0];
}
