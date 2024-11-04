
import { useState } from 'react';
import { NavLink } from '../types/navLink.ts';
import PublicNavLink from './PublicNavLink.tsx';

interface NavLinkProps {
  title: string;
  leftNavLinks: NavLink[];
  rightNavLinks: NavLink[];
  opaque?: boolean
}

function PublicNav({ title, leftNavLinks, rightNavLinks, opaque }: NavLinkProps) {
  const [collapseNavbar, setCollapseNavbar] = useState(true);
  opaque = opaque ?? false;

  return (
    <>
      <nav className={`top-0 ${(opaque) ? "fixed" : "absolute"} z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ${(opaque) ? "bg-white shadow" : ""}`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${(opaque) ? "text-slate-700" : "text-white"}`} href="/">
              {title}
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => { setCollapseNavbar(x => !x) }}
            >
              <i className={`${(opaque) ? "" : "text-white"} fas fa-bars`}></i>
            </button>
          </div>
          <div className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none ${(opaque) ? "" : "shadow-lg lg:rounded-none rounded"} ${(collapseNavbar) ? "hidden" : "block"}`}>
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {leftNavLinks.map((link, index) => <PublicNavLink link={link} opaque={opaque} key={index} />)}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              {rightNavLinks.map((link, index) => <PublicNavLink link={link} opaque={opaque} key={index} />)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default PublicNav;