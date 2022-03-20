import React from 'react';
import {
  MailIcon,
  PhoneIcon,
  HomeIcon,
  CakeIcon,
  UsersIcon,
} from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="w-full rounded-tl-lg rounded-bl-lg sm:max-w-sm p-8 bg-cyan-900 text-white"
    >
      <div className="p-4 mb-12 backdrop-blur-sm bg-white/20 rounded-xl">
        <img
          src="assets/tk_bw_crop.jpeg"
          alt="Profile Picture"
          className="rounded-full w-56 mx-auto mb-2"
        />
        <h1 className="text-center text-3xl font-semibold mb-2">
          Tony Kornmeier
        </h1>
        <h2 className="flex flex-col text-center text-xl font-light">
          <span>Fullstack Developer,</span> Digital Accessibility
        </h2>
      </div>

      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <div className="flex items-center my-3">
          <MailIcon className="inline w-6 mr-4 text-slate-300" />
          <span className="sr-only">Email address</span>
          <a href="mailto:">tony@kornmeier.me</a>
        </div>
        <div className="flex items-center my-3">
          <PhoneIcon className="inline w-6 mr-4 text-slate-300" />
          <span className="sr-only">Phone</span>
          <a href="tel:419-704-6708">419.704.6708</a>
        </div>
        <div className="flex items-center my-3">
          <HomeIcon className="inline w-6 mr-4 text-slate-300" />
          <span className="sr-only">Location</span>
          <div>
            <p>Monclova, OH</p>
          </div>
        </div>
      </div>

      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <ul className="list-none">
          <li>
            <label htmlFor="a11y-skill">Accessibility</label>
            <progress
              id="a11y-skill"
              value={0.9}
              aria-valuemin={0}
              aria-valuenow={0.9}
              aria-valuemax={1}
            ></progress>
          </li>
          <li>
            <label htmlFor="js-skill">JavaScript/TypeScript</label>
            <progress
              id="js-skill"
              value={0.83}
              aria-valuemin={0}
              aria-valuenow={0.83}
              aria-valuemax={1}
            >
              85%
            </progress>
          </li>
          <li>
            <label htmlFor="react-skill">React</label>
            <progress
              id="react-skill"
              value={0.76}
              aria-valuemin={0}
              aria-valuenow={0.76}
              aria-valuemax={1}
            ></progress>
          </li>
          <li>
            <label htmlFor="node-skill">Node / Express.js</label>
            <progress
              id="node-skill"
              value={0.8}
              aria-valuemin={0}
              aria-valuenow={0.8}
              aria-valuemax={1}
            ></progress>
          </li>
          <li>
            <label htmlFor="css-skill">TailwindCSS</label>
            <progress
              id="css-skill"
              value={0.7}
              aria-valuemin={0}
              aria-valuenow={0.7}
              aria-valuemax={1}
            ></progress>
          </li>
        </ul>
      </div>
      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">Tools</h2>
        <ul className="list-none">
          <li>
            <div className="mb-2">Accessibility Testing Tools</div>
            <ul className="leading-8 flex flex-wrap group">
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                axe
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                axe DevTools Pro
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Deque University
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                NVDA
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Jaws
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                VoiceOver
              </li>
            </ul>
          </li>
          <li>
            <div className="mb-2">Testing Frameworks</div>
            <ul className="leading-8 flex flex-wrap group">
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Cypress
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Webdriver.io
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Puppeteer
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Playwright
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Selenium
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Cucumber
              </li>
            </ul>
          </li>
          <li>
            <div className="mb-2">Infrastructure / Hosting / DB</div>
            <ul className="leading-8 flex flex-wrap group">
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                AWS
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Vercel
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                Netlify
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                MongoDB
              </li>
              <li className="inline-flex items-center px-3 py-0.5 last:ml-0 mr-1 mb-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                mySQL
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <h3 className="font-semibold">BBA Information Systems</h3>
        <p>1997 - 2002 University of Toledo</p>
      </div>

      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">Personal</h2>
        <div className="flex items-center my-3">
          <CakeIcon className="inline w-6 mr-4 text-slate-300" />
          <span>Born June 6th 1979</span>
        </div>
        <div className="flex items-center my-3">
          <UsersIcon className="inline w-6 mr-4 text-slate-300" />
          <span className="sr-only">Family</span>
          <span>Married, three kids</span>
        </div>
      </div>

      <div className="font-light text-lg px-2 mb-12">
        <h2 className="text-xl font-semibold mb-4">On the Web</h2>
        <div className="flex items-center my-3">
          <img
            src="./assets/logo-github.svg"
            className="inline w-6 mr-4"
            alt="GitHub Logo"
          />
          <a
            href="https://github.com/akornmeier"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center my-3">
          <img
            src="./assets/logo-linkedin.svg"
            className="inline w-6 mr-4"
            alt="LinkedIn Logo"
          />
          <a
            href="https://www.linkedin.com/in/tonykornmeier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center my-3">
          <img
            src="./assets/logo-twitter.svg"
            className="inline w-6 mr-4"
            alt="Twitter Logo"
          />
          <a
            href="https://twitter.com/akornmeier"
            target="_blank"
            rel="noopener noreferrer"
          >
            @akornmeier
          </a>
        </div>
      </div>
    </div>
  );
}
