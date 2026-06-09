/**
 * Filled paper-plane "send" icon
 * Uses `fill="currentColor"` so it inherits the surrounding text color.
 *
 * @param {object} props - Forwarded to the root <svg> (e.g. className, aria-*).
 * @returns {JSX.Element}
 */
function SendFill(props) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M25.2942 7.10773C25.8342 5.61398 24.3867 4.16648 22.8929 4.70773L4.63667 11.3102C3.13792 11.8527 2.95667 13.8977 4.33542 14.6965L10.1629 18.0702L15.3667 12.8665C15.6024 12.6388 15.9182 12.5128 16.2459 12.5156C16.5737 12.5185 16.8872 12.65 17.1189 12.8817C17.3507 13.1135 17.4822 13.427 17.485 13.7547C17.4879 14.0825 17.3619 14.3982 17.1342 14.634L11.9304 19.8377L15.3054 25.6652C16.1029 27.044 18.1479 26.8615 18.6904 25.364L25.2942 7.10773Z" />
    </svg>
  );
}

export default SendFill;
