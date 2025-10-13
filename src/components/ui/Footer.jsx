function Footer() {
  return (
    <footer className="text-center flex-row gap-6">
      <h5 className="text-[var(--h5-size)] bold">
        Juniors<img src="src/assets/ducky1.svg" className="w-0.5 inline align-baseline"></img>dev
      </h5>
      <p className="text-[var(--text-caption-size)] bold">We Build, Work and Win Together</p>
      <p className="text-[var(--text-body-size)]">Follow Us</p>
      <div className="flex gap-6 py-4 justify-center">
        {/* <img
          src="src/assets/discord-simple.svg"
          alt="discord link"
          class=" w-6 h-6"
        ></img> */}
        <img
          src="src/assets/facebook-simple.svg"
          alt="facebook link"
          className="w-6 h-6 icon"
        ></img>
        <img
          src="src/assets/instagram-simple.svg"
          alt="instagram link"
          className="w-6 h-6 icon"
        ></img>
        <img
          src="src/assets/linkedin-lightmode.png"
          alt="linkedin link"
          className="w-6 h-6 dark:hidden"
        ></img>
        <img
          src="src/assets/linkedin-darkmode.png"
          alt="linkedin link"
          className="w-6 h-6 hidden dark:block"
        ></img>
        <img src="src/assets/github-simple.svg" alt="github link" className="w-6 h-6 icon"></img>
      </div>
      <div className="pb-4">Language toggle</div>
      <p className="text-[var(--text-caption-size)]">© 2025 Juniors.dev | All rights reserved</p>
    </footer>
  );
}

export default Footer;
