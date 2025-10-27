/**
 * A reusable button component with customizable variants and sizes
 *
 * Supports different visual styles through the variant prop and multiple size options.
 * Uses CSS custom properties for theming consistency across the application.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - Text content displayed inside the button
 * @param {Function} props.onClick - Click event handler function
 * @param {('primary')} [props.variant='primary'] - Visual style variant of the button
 * @param {('sm'|'md'|'lg')} [props.size='md'] - Size of the button (small, medium, or large)
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @returns {JSX.Element} A styled button element
 *
 * @example
 * // Basic usage with default props
 * <Button text="Click me" onClick={() => console.log('Clicked!')} />
 *
 * @example
 * // Large button with explicit variant
 * <Button
 *   text="Submit"
 *   onClick={handleSubmit}
 *   variant="primary"
 *   size="lg"
 * />
 */
function Button({ text, onClick, variant = "primary", size = "md", disabled = false }) {
  const variants = {
    //primary variant
    primary: "bg-[var(--color-primary-featherflame-hex)] text-[var(--color-primary-nightwing-hex)]",

    //secondary variant ?
    // accent variant ?

    // alert variants maybe?
    // red: "bg-[var(--color-alert-coral-hex)] text-[var(--color-primary-nightwing-hex)]",
    //yellow: "bg-[var(--color-alert-duck-hex)] text-[var(--color-primary-nightwing-hex)]" ,
    //green: "bg-[var(--color-alert-grass-hex)] text-[var(--color-primary-nightwing-hex)]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[var(--text-caption-size)]",
    md: "px-5 py-2.5 text-[var(--text-body-size)]",
    lg: "px-6 py-3 text-[var(--h5-size)]",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg border border-transparent font-bold cursor-pointer transition-all duration-250
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
