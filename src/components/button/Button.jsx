//button component w/variables
function Button({ text, onClick, variant = "primary", size = "md" }) {
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
        ${sizes[size]}`}
    >
      {text}
    </button>
  );
}

export default Button;
