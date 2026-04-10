import noFlag from "../../assets/emojione_flag-for-norway.png";
import gbFlag from "../../assets/emojione_flag-for-united-kingdom.png";

/** @typedef {{ code: string, dialCode: string, flagSrc: string }} PhoneCountryOption */

/** @type {PhoneCountryOption[]} */
export const phoneCountryOptions = [
  { code: "no", dialCode: "+47", flagSrc: noFlag },
  { code: "gb", dialCode: "+44", flagSrc: gbFlag },
];

export const phoneCountryCodes = phoneCountryOptions.map((o) => o.code);

/**
 * @param {string} code
 * @returns {PhoneCountryOption}
 */
export function getPhoneCountryOption(code) {
  return phoneCountryOptions.find((o) => o.code === code) ?? phoneCountryOptions[0];
}
