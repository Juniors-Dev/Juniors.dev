import { BookOpen } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";
import { CodeXml } from "lucide-react";

function Mission() {
  return (
    <section className="border-[var(--color-primary-nightwing-hex)] border-1 flex flex-col text-center text-balance sm:max-w-3/5 m-auto sm:text-pretty">
      <img
        src="/src/assets/mission-image.jpg"
        alt="image of concrete floor with text: Passion led us here"
        className="w-full p-4 m-auto"
      />

      <article className="color-[var(--color-primary-nightwing-hex)] dark:color-[var(--color-accent-eggshell-hex)] p-4 pt-0 flex-col space-between text-pretty">
        <h2 className="font-[var(--h2-size)] text-center">Our Mission</h2>
        <p className="font-[var(--text-body-size)] p-4 text-left">
          We are a team of juniors <br className="sm:hidden" />
          turning ambition into action.
        </p>
        <p className="font-[var(--text-body-size)] px-4 text-left text-pretty">
          What started as a small side project has grown into a movement, bringing together
          designers, developers and builders to bridge the gap between education and employment.
        </p>
        <p className="font-[var(--text-body-size)] p-4 text-left text-pretty">
          Through collaboration, hands on experience, and a supportive community, we are creating
          opportunities for juniors to grow, learn and thrive.
        </p>
      </article>

      <article className="color-[var(--color-primary-nightwing-hex)] dark:color-[var(--color-accent-eggshell-hex) flex m-auto text-left flex-col p-4 space-between text-pretty">
        <h2 className="font-[var(--h2-size)] text-center gap-4 pb-4">What to Expect</h2>
        <div className="flex gap-4 pl-4">
          <BookOpen className="block min-h-8 min-w-8" />
          <div flex flex-row>
            <h3 className="font-[var(--text-body-size)]">100% Learning-Based</h3>
            <p className="font-[var(--text-body-size)]">
              Every participant gains hands-on experience and personal guidance
            </p>
          </div>
        </div>
        <div className="flex gap-4 pl-4">
          <CalendarCheck2 className="block min-w-8 min-h-8" />
          <div>
            <h3 className="font-[var(--text-body-size)]">Weekly Check-Ins</h3>
            <p className="font-[var(--text-body-size)]">
              For structure, community, and continuous progress
            </p>
          </div>
        </div>
        <div className="flex gap-4 pl-4">
          <CodeXml className="block min-w-8 min-h-8" />
          <div>
            <h3 className="font-[var(--text-body-size)]">Tech Stack Used</h3>
            <p className="font-[var(--text-body-size)] ">
              React, Astro, Tailwind, Github, Vite and more..
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Mission;
