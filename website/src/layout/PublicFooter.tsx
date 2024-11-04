
import SocialLink from './SocialLink';
import { SocialProfile } from '../types/navLink';

interface FooterProps {
  socials?: SocialProfile[];
}

function PublicFooter({ socials }: FooterProps) {
  return (
    <>
      <footer className="relative bg-slate-200 pt-8 pb-6">
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-600">
                Find me on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {socials?.map((profile, index) => (
                  <SocialLink key={index} profile={profile} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">About Us</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Github</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Free Products</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2" >Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">MIT License</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1 pb-5">
                Copyright © Blue Ethics Project <span>{`${new Date().getFullYear()}`}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PublicFooter;