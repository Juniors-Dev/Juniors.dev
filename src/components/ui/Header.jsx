import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

function Header() {
  return (
    <header className="grid grid-cols-5 xs:grid-cols-8 sm:grid-cols-10">
      <div className="col-span-3 self-center xs:col-span-4">
        <h5 className="text-h5">
          Juniors
          <img src="src/assets/ducky1.svg" className="w-0.5 inline align-baseline" />
          dev
        </h5>
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
