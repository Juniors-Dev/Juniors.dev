import Button from "/src/components/button/Button";

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
      <div className="flex flex-col baseline-start gap-4">
        <img src="/src/assets/placeholder-img.png" alt="placeholder image" />
        <h1 className="font-[var(--h1-size)] text-[var(--color-primary-nightwing-hex)] text-pretty text-left xs:text-center sm:text-center">
          We build, <br className="sm:hidden" />
          Work and Win <br className="sm:hidden" />
          Together
        </h1>
        <p className="font-[var(--h2-size)] text-[var(--color-primary-nightwing-hex)] text-left text-pretty xs:text-center sm:text-center">
          Empowering developers through community, <br className="hidden xs:block" />
          collaboration and career opportunities.
        </p>
        <div className="flex justify-center">
          <Button variant="primary" size="md" onClick={scrollToContact}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
