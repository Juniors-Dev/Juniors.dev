function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <img src="/src/assets/placeholder-img.png" alt="placeholder image" />
        <h1 className="font-[var(--h1-size)] text-[var(--color-primary-nightwing-hex)] text-center text-pretty">
          We build, <br />
          Work and Win Together
        </h1>
        <p className="font-[var(--h2-size)] text-[var(--color-primary-nightwing-hex)] text-center text-pretty">
          Empowering developers through community, collaboration and career opportunities.
        </p>
      </div>
    </section>
  );
}

export default Hero;
