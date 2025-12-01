import { BookOpen } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";
import { CodeXml } from "lucide-react";

function Mission() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="border-nightwing dark:border-eggshell border-1 flex flex-col text-balance  m-auto sm:text-pretty p-6 md:p-8 lg:p-10">
        <article className="color-fg space-between text-pretty sm:flex-row pb-12 md:pb-16 lg:pb-20 md:flex md:flex-row md:gap-5 lg:gap-6">
          <div className="flex w-full lg:w-xl m-auto">
            <img
              src="/src/assets/mission-image.jpg"
              alt="image of concrete floor with text: Passion led us here"
              className="w-fit sm:w-md lg:w-xl m-auto md:pt-8"
            />
          </div>
          <div className="flex flex-col justify-self-center">
            <h2 className="text-h2 text-center py-4 xs:py-6 md:py-8 lg:py-10">Our Mission</h2>
            <p className="text-body text-left max-w-104">
              We are a team of juniors turning ambition into action.
            </p>
            <p className="text-body text-left text-pretty py-3 md:py-4 lg:py-5 max-w-104">
              What started as a small side project has grown into a movement, bringing together
              designers, developers and builders to bridge the gap between education and employment.
            </p>
            <p className="text-body text-left text-pretty max-w-104">
              Through collaboration, hands on experience, and a supportive community, we are
              creating opportunities for juniors to grow, learn and thrive.
            </p>
          </div>
        </article>
        <article className="color-fg flex m-auto text-left flex-col space-between text-pretty gap-2 ">
          <h2 className="text-h2 text-center pb-4 ">What to Expect</h2>
          <div className="md:flex md:flex-row md:gap-10">
            <div className="flex md:block">
              <BookOpen className="block min-h-8 min-w-8 stroke-fg mr-5 md:justify-self-center md:mb-4 md:mr-0" />
              <div className="md:text-center">
                <h3 className="text-body">100% Learning-Based</h3>
                <p className="text-body max-w-48 md:max-w-56 text-balance">
                  Every participant gains hands-on experience and personal guidance
                </p>
              </div>
            </div>
            <div className="flex my-4 md:my-0 md:block">
              <CalendarCheck2 className="block min-w-8 min-h-8 stroke-fg mr-5 md:justify-self-center md:mb-4 md:mr-0" />
              <div className="md:text-center text-balance">
                <h3 className="text-body">Weekly Check-Ins</h3>
                <p className="text-body max-w-48 md:max-w-56 text-balance">
                  For structure, community, and continuous progress
                </p>
              </div>
            </div>
            <div className="flex md:my-0 md:block">
              <CodeXml className="block min-w-8 min-h-8 stroke-fg mr-5 md:justify-self-center md:mb-4 md:mr-0" />
              <div className="md:text-center">
                <h3 className="text-body">Tech Stack Used</h3>
                <p className="text-body max-w-48 md:max-w-56 text-balance">
                  React, Astro, Tailwind, Github, Vite and more..
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Mission;
