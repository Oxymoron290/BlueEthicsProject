import { useState, useRef, useEffect } from 'react';
import { NavLink } from '../types/navLink';

interface PublicNavLinkProps {
  link: NavLink;
  opaque: boolean;
}

function PublicNavLink({ link, opaque }: PublicNavLinkProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const toggleDropdown = () => setDropdownOpen(x => !x);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (link.type === "button") {
    return (
      <>
        <li className="flex items-center">
          <button
            className={`text-white bg-pink-500 hover:bg-pink-400 active:bg-pink-600 ${(opaque) ? "" : "lg:text-slate-700 lg:bg-white lg:hover:bg-slate-500 lg:active:bg-slate-400"} text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`}
            onClick={() => link.url && window.open(link.url, "_blank")}
            type="button"
          >
            <i className={(opaque) ? link.icon : link.iconDark ?? link.icon}></i> Download
          </button>
        </li>
      </>
    );
  }
  if (link.type === "iconButton") {
    return (
      <>
        <li className="flex items-center">
          <a
            className={`hover:text-slate-500 ${(opaque) ? "" : "lg:text-white lg:hover:text-slate-200" } text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
            href={link.url}
            target={link.target ?? "_blank"}>
            <i className={`${(opaque) ? link.icon : link.iconDark ?? link.icon} text-lg leading-lg`}></i>
            <span className="lg:hidden inline-block ml-2">{link.name}</span>
          </a>
        </li>
      </>
    );
  }
  if (link.type === "icon") {
    return (
      <>
        <li className={`hover:text-slate-500 ${(opaque) ? "" : "lg:text-white lg:hover:text-slate-200" } text-slate-700 flex items-center`}>
          <a
            className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
            href={link.url}
            target={link.target ?? "_blank"}>
            <i className={`${(opaque) ? link.icon : link.iconDark ?? link.icon} text-lg leading-lg mr-2`}></i> {link.name}
          </a>
        </li>
      </>
    );
  }
  if(link.type === "link") {
    return (
      <>
        <li className="inline-block relative">
          <button
            className={`hover:text-slate-500 ${(opaque) ? "" : "lg:text-white lg:hover:text-slate-200" } text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
            onClick={() => link.url && window.open(link.url, link.target ?? "_self")}
          >
            {link.name}
          </button>
        </li>
      </>
    );
  }
  if (link.type === "dropdown") {
    return (
      <>
        <li className="inline-block relative" ref={dropdownRef}>
          <button
            className={`hover:text-slate-500 ${(opaque) ? "" : "lg:text-white lg:hover:text-slate-200" } text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
            onClick={toggleDropdown}
          >
            {link.name}
          </button>
          <div className={`${dropdownOpen ? "block" : "hidden"} absolute left-0 mt-2 bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48`}>
            {link.items?.map((item, index) => (
              <div key={index}>
                {(index >= 1) && (<div className="h-0 mx-4 my-2 border border-solid border-slate-100"></div>)}
                <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">
                  {item.sectionName}
                </span>
                {item.items.map((l, k) => (
                  <a key={k} href={l.url} target={l.target ?? "_self"} className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700">
                    {l.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </li>
      </>
    );
  }
}

export default PublicNavLink;