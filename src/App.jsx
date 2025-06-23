import './App.css'
import productivityBanner from './assets/productivity-graveyard-banner.jpg';
import discordLogo from './assets/Discord-Symbol-Blurple.svg';
import jiraLogo from './assets/Jira mark brand RGB.svg';
import figmaLogo from './assets/Figma-logo.svg.png';
import githubLogo from './assets/github-mark.svg';
import codingDucky from './assets/coding-ducky.png';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight bg-gradient-to-r from-blue-300 via-blue-200 to-[var(--color-offwhite)] bg-clip-text text-transparent">Juniors.Dev</h1>
        <p className="text-lg md:text-xl font-mono">console.log('Hello world')</p>
      </div>
      <main className="w-full max-w-3xl rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-md bg-offwhite">
        <blockquote className="italic text-primary mb-6 text-center">
          "We grow, build, and win together."
        </blockquote>
        <section className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl">🚧</span>
            <h2 className="text-xl font-bold text-primary">Full website coming soon!</h2>
          </div>
          <p className="mb-2 text-primary text-center">
            Our interns (and their rubber ducks) are working hard on it...<br/>
            In the meantime, check out what we're about below!
          </p>
          <div className="flex justify-center">
            <img src={codingDucky} alt="Coding Ducky" className="w-40 h-auto mt-2" />
          </div>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">About</h3>
          <p className="mb-2 text-primary">
            Welcome to Juniors.Dev, a creative community and collaboration hub built to give junior developers <span className="font-bold text-primary">real-world experience</span> through teamwork, hands-on learning, and ship-worthy projects.
          </p>
          <p className="mb-2 text-primary">
            <b>Mission</b>: Helping juniors gain <span className="font-bold text-primary">real experience</span> by working on real projects.
          </p>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Our Vision</h3>
          <ul className="list-disc list-inside pl-4 mb-2 text-primary">
            <li><b>Create a safe space</b>: for junior developers to explore, experiment, and grow without pressure.</li>
            <li><b>Collaborate on real projects</b>: team-based, practical, like in a real job.</li>
            <li><b>Build a portfolio</b>: create things you can proudly showcase to employers and clients.</li>
            <li><b>Grow into paid opportunities</b>: as we evolve and collaborate with clients and companies.</li>
          </ul>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Our Ethos</h3>
          <ul className="list-disc list-inside pl-4 mb-2 text-primary">
            <li><b>No pressure</b>: life happens. Contribute what you can, when you can.</li>
            <li><b>Be respectful</b>: communicate honestly, especially if priorities shift.</li>
            <li><b>Team-first mindset</b>: if you commit to something, the team counts on you.</li>
            <li><b>Professional vibes</b>: clear communication, no judgment, and plenty of support.</li>
            <li><b>Celebrate learning and mistakes</b>: every bug and question is a chance to grow.</li>
            <li><b>Support each other</b>: offer help, share resources, and cheer on your teammates' wins.</li>
            <li><b>Transparency</b>: share progress, blockers, and feedback openly.</li>
            <li><b>Have fun!</b>: enjoy the process, share memes, and make friends along the way.</li>
          </ul>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Learning by Doing</h3>
          <ul className="list-disc list-inside pl-4 mb-2 text-primary">
            <li><b>Watch</b>, <b>try</b>, and <b>contribute</b>, no experience required to join the community</li>
            <li>To participate in projects, we recommend at least <b>basic HTML, CSS, and JavaScript</b> skills (bonus if you know a framework like <span className="text-blue-500 font-semibold">Tailwind</span>!)</li>
            <li>Receive <b>coaching</b> and <b>mentorship</b> from more experienced devs and designers as you contribute</li>
            <li>Step up to <b>lead</b> a tech or design team within a real project when you're ready</li>
            <li>Build <b>practical teamwork</b> and <b>project experience</b> you can showcase to employers</li>
          </ul>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Workflow & Tools</h3>
          <ul className="list-disc list-inside pl-4 mb-2 text-primary">
            <li className="flex items-center gap-2"><img src={discordLogo} alt="Discord logo" className="w-5 h-5 inline-block" /><b>Discord</b> — team communication</li>
            <li className="flex items-center gap-2"><img src={jiraLogo} alt="Jira logo" className="w-5 h-5 inline-block" /><b>Jira</b> — task tracking</li>
            <li className="flex items-center gap-2"><img src={figmaLogo} alt="Figma logo" className="w-5 h-5 inline-block" /><b>Figma</b> — design</li>
            <li className="flex items-center gap-2"><img src={githubLogo} alt="GitHub logo" className="w-5 h-5 inline-block" /><b>GitHub</b> — code & project org</li>
          </ul>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Current Project</h3>
          <img
            src={productivityBanner}
            alt="Productivity Graveyard banner"
            className="w-full max-h-80 object-cover rounded-xl shadow mb-3 border border-primary/20"
          />
          <p className="mb-2 text-primary">
            <b>Productivity Graveyard</b>: As developers, we've all started countless projects that seemed exciting at first, only to abandon them for the next shiny idea. <span className="italic">Productivity Graveyard is a memorial site where you can lay these abandoned projects to rest with the honor they deserve.</span> Submit your <span className="font-bold">dead projects</span>, view the graveyard, and track stats!
          </p>
        </section>
        <hr className="my-6 border-primary/20" />
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1 text-primary text-center">Want to Join?</h3>
          <p className="mb-2 text-primary">
            <span className="font-bold">Designers</span>, <span className="font-bold">devs</span>, <span className="font-bold">writers</span>, and <span className="font-bold">community builders</span> welcome!<br/>
            Contact & links: <span className="italic">Coming soon</span>
          </p>
        </section>
        <section className="flex flex-col items-center gap-2 mt-8 text-primary text-center">
          <a href="https://github.com/Juniors-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline justify-center">
            <img src={githubLogo} alt="GitHub logo" className="w-5 h-5 inline-block" />
            <span>Find us on GitHub</span>
          </a>
          <footer className="text-sm mt-2" style={{ color: 'color-mix(in srgb, var(--color-primary) 60%, var(--color-offwhite) 40%)' }}>
            &copy; {new Date().getFullYear()} Juniors.Dev — Community for junior devs
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
