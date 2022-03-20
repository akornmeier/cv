import React from 'react';

export default function Content() {
  return (
    <div className="content w-full p-12 bg-white rounded-tr-lg rounded-br-lg">
      <div id="profile" className="prose">
        <h2 className="font-bold sm:text-xl uppercase tracking-widest border-cyan-900 text-cyan-700 border-l-8 pl-2">
          Profile
        </h2>
        <p>
          I'm a full stack web developer focusing on digital accessibility
          (WCAG) through web fundamentals (semantic HTML, JS, CSS, and testing).
          I have extensive experience building automated test processes and
          strategies.
        </p>
        <p>
          I am highly motivated in expanding my horizons day-by-day for better
          performance, testing, and user experience.
        </p>
      </div>
      <hr className="mt-8 mb-12" />
      <div id="experience" className="prose">
        <h2 className="font-bold sm:text-xl uppercase tracking-widest border-cyan-900 text-cyan-700 border-l-8 pl-2">
          Experience
        </h2>
        <div>
          <h3>Deque Systems, Inc</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2020 - Present:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <strong>Senior Tech Lead</strong>{' '}
              <em>(axe Reports Product Team)</em>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Lead the development of Deque's enterprise accessibility analytics
              dashboard (axe Reports). Design system architecture, CI/CD
              pipeline, and test suites. Team includes 3 developers, 2 QA
              engineers, and a designer.
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Tools:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <ul className="flex flex-wrap list-none pl-0">
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  React
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  TypeScript
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  Fastify
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  ViteJS
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  TailwindCSS
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  Docker
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  GitHub
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  AWS
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2015 - 2020:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <strong>Developer Services Team Lead</strong>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Integrated automated accessibility testing tools in client CI/CD
              pipelines. Lead accessibility source code remediation projects.
              Developed and maintained Deque's accessible overlay product
              (Amaze)
            </div>
          </section>
        </div>
        <div>
          <h3>The Leadership Circle</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2009 - 2015:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <strong>Software Development Lead</strong>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Designed and developed the company's custom survey system,
              reporting, and delivery process. Lead team of 4 developers, 1 QA
              engineer, and 2 contractors.
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Tools:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <ul className="flex flex-wrap list-none pl-0">
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  .Net C#
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  jQuery
                </li>
                <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border-slate-700 border-2">
                  SQL Server
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <h3>Computol, Inc</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2006 - 2009:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <strong>Software Developer</strong>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Front-end web development for small agency.
            </div>
          </section>
        </div>
        <div>
          <h3>TNS Global</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2004 - 2006:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <strong>Interactive Survey Developer</strong>
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Developed interactive market research surveys for fortune 500
              clients.
            </div>
          </section>
        </div>
      </div>
      <hr className="mt-8 mb-12" />
      <div id="projects" className="prose">
        <h2 className="font-bold sm:text-xl uppercase tracking-widest border-cyan-900 text-cyan-700 border-l-8 pl-2">
          Projects
        </h2>
        <div className="mb-16">
          <h3>Cauldron</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Details:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Core contributor to Deque's accessible React component library.
            </div>
          </section>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a
                href="https://cauldron.dequelabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cauldron.dequelabs.com
              </a>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3>axe DevTools</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Details:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Built custom integrations for testing frameworks: Cypress.IO,
              Webdriver.IO, Test Cafe.
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3>Amaze</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Details:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Code owner, key contributor of Deque's custom accessibility
              overlay product.
            </div>
          </section>
        </div>
      </div>
      <hr className="mt-8 mb-12" />
      <div id="conferences" className="prose">
        <h2 className="font-bold sm:text-xl uppercase tracking-widest border-cyan-900 text-cyan-700 border-l-8 pl-2">
          Conferences
        </h2>
        <div className="mb-16">
          <h3>Speaker</h3>
          <ul>
            <li>
              2019 - CSUN Assistive Technology Conference -{' '}
              <em>
                Defining the Right Accessibility Metrics for Your Business
              </em>
            </li>
          </ul>
          <h3>Attendee</h3>
          <ul>
            <li>CSUN Assistive Technology Conference: 2017, 2019</li>
            <li>Axe-con Digital Accessibility Conference : 2021, 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
