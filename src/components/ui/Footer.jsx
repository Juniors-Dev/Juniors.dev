function Footer() {
  return (
    <footer class="text-center flex-row gap-6">
      <h5 class="text-[var(--h5-size)] bold">
        Juniors<img src="src/assets/ducky1.svg" class="w-0.5 inline align-baseline"></img>dev
      </h5>
      <p class="text-[var(--text-caption-size)] bold">We Build, Work and Win Together</p>
      <p class="text-[var(--text-body-size)]">Follow Us</p>
      <div class="flex gap-6 py-4 justify-center">
        {/* <img
          src="src/assets/discord-simple.svg"
          alt="discord link"
          class="invert-100 w-6 h-6"
        ></img> */}
        <img
          src="src/assets/facebook-simple.svg"
          alt="facebook link"
          class="invert-100 w-6 h-6"
        ></img>
        <img
          src="src/assets/instagram-simple.svg"
          alt="instagram link"
          class="invert-100 w-6 h-6"
        ></img>
        <img src="src/assets/linkedin-darkmode.png" alt="linkedin link" class="w-6 h-6"></img>
        <img src="src/assets/github-simple.svg" alt="github link" class="invert-100 w-6 h-6"></img>
      </div>
      <div class="pb-4">Language toggle</div>
      <p class="text-[var(--text-caption-size)]">© 2025 Juniors.dev | All rights reserved</p>
    </footer>
  );
}

export default Footer;
