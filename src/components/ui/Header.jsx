import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

function Header() {
  return (
    <header className="grid grid-cols-5 xs:grid-cols-8 sm:grid-cols-10">
      <div className="col-span-3 self-center xs:col-span-4">
        <img
          src="/src/assets/SVG-logo-lightmode.svg"
          className="block dark:hidden max-w-36"
          alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
        />
        <img
          src="/src/assets/SVG-logo-darkmode.svg"
          className="hidden dark:block max-w-36"
          alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
        />
      </div>
      <div className="pr-8 col-start-4 xs:col-start-7 sm:col-start-9 sm:justify-self-end sm:p-0">
        <ThemeToggle />
      </div>
      <div className="col-start-5 pl-8 sm:pl-0 xs:col-start-8 sm:col-start-10 place-self-center justify-self-end">
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;
