interface NavLinkProps {
  title: string;
}

function AdminNav({ title }: NavLinkProps) {

  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick="toggleNavbar('example-collapse-sidebar')"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            href="../../index.html"
          >
            {title}
          </a>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <a
                className="text-slate-500 block py-1 px-3"
                href="#pablo"
                onClick="openDropdown(event,'notification-dropdown')"
              ><i className="fas fa-bell"></i></a>
              <div
                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="notification-dropdown"
              >
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Action</a><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Another action</a><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Something else here</a>
                <div
                  className="h-0 my-2 border border-solid border-slate-100"
                ></div>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Seprated link</a>
              </div>
            </li>
            <li className="inline-block relative">
              <a
                className="text-slate-500 block"
                href="#pablo"
                onClick="openDropdown(event,'user-responsive-dropdown')"
              ><div className="items-center flex">
                  <span
                    className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full"
                  ><img
                      alt="..."
                      className="w-full rounded-full align-middle border-none shadow-lg"
                      src="../../assets/img/team-1-800x800.jpg"
                    /></span></div></a>
              <div
                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="user-responsive-dropdown"
              >
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Action</a>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Another action</a>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Something else here</a>
                <div
                  className="h-0 my-2 border border-solid border-slate-100"
                ></div>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >Seprated link</a>
              </div>
            </li>
          </ul>
          <div
            className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
            id="example-collapse-sidebar"
          >
            <div
              className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200"
            >
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <a
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="../../index.html"
                  >
                    Notus Tailwind JS
                  </a>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick="toggleNavbar('example-collapse-sidebar')"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6
              className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <a
                  href="./dashboard.html"
                  className="text-xs uppercase py-3 font-bold block text-pink-500 hover:text-pink-600"
                >
                  <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                  Dashboard
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./settings.html"
                  className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                >
                  <i className="fas fa-tools mr-2 text-sm text-slate-300"></i>
                  Settings
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./tables.html"
                  className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                >
                  <i className="fas fa-table mr-2 text-sm text-slate-300"></i>
                  Tables
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./maps.html"
                  className="text-xs uppercase py-3 font-bold block text-slate-700 hover:text-slate-500"
                >
                  <i
                    className="fas fa-map-marked mr-2 text-sm text-slate-300"
                  ></i>
                  Maps
                </a>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6
              className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <a
                  href="../auth/login.html"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  <i className="fas fa-fingerprint text-slate-300 mr-2 text-sm"></i>
                  Login
                </a>
              </li>

              <li className="items-center">
                <a
                  href="../auth/register.html"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fas fa-clipboard-list text-slate-300 mr-2 text-sm"
                  ></i>
                  Register
                </a>
              </li>
            </ul>

            {/* <!-- Divider --> */}
            <hr className="my-4 md:min-w-full" />
            {/* <!-- Heading --> */}
            <h6
              className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              No Layout Pages
            </h6>
            {/* <!-- Navigation --> */}

            <ul
              className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >
              <li className="items-center">
                <a
                  href="../landing.html"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fas fa-newspaper text-slate-300 mr-2 text-sm"
                  ></i>
                  Landing Page
                </a>
              </li>

              <li className="items-center">
                <a
                  href="../profile.html"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fas fa-user-circle text-slate-300 mr-2 text-sm"
                  ></i>
                  Profile Page
                </a>
              </li>
            </ul>

            {/* <!-- Divider --> */}
            <hr className="my-4 md:min-w-full" />
            {/* <!-- Heading --> */}
            <h6
              className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Documentation
            </h6>
            {/* <!-- Navigation --> */}
            <ul
              className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/colors/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i
                    className="fas fa-paint-brush mr-2 text-slate-300 text-base"
                  ></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i
                    className="fab fa-css3-alt mr-2 text-slate-300 text-base"
                  ></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i
                    className="fab fa-angular mr-2 text-slate-300 text-base"
                  ></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i
                    className="fab fa-js-square mr-2 text-slate-300 text-base"
                  ></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-slate-300 text-base"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminNav;