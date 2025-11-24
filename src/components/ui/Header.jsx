import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

function Header() {
  return (
    <header className="grid grid-cols-5 gap-1 xs:grid-cols-10">
      <div className="col-span-3 self-center xs:col-span-4">
        <h5 className="text-h5">
          Juniors<img src="src/assets/ducky1.svg" className="w-0.5 inline align-baseline"></img>dev
        </h5>
      </div>
      <div className="pr-6 col-start-4 xs:col-start-9 justify-self-end sm:p-0">
        <ThemeToggle />
      </div>
      <div className="col-start-5 pl-6 sm:pl-0 xs:col-start-10 place-self-center justify-self-end ">
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;
