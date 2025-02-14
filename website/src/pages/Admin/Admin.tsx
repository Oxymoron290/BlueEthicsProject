function Admin() {
  return (
    <>      <div className="relative md:ml-64 bg-slate-50">
    <nav
      className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
    >
      <div
        className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
      >
        <a
          className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          href="./index.html"
          >Dashboard</a
        >
        <form
          className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
        >
          <div className="relative flex w-full flex-wrap items-stretch">
            <span
              className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
              ><i className="fas fa-search"></i
            ></span>
            <input
              type="text"
              placeholder="Search here..."
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </form>
        <ul
          className="flex-col md:flex-row list-none items-center hidden md:flex"
        >
          <a
            className="text-slate-500 block"
            href="#pablo"
            onClick="openDropdown(event,'user-dropdown')"
          >
            <div className="items-center flex">
              <span
                className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full"
                ><img
                  alt="..."
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src="../../assets/img/team-1-800x800.jpg"
              /></span>
            </div>
          </a>
          <div
            className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            id="user-dropdown"
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
        </ul>
      </div>
    </nav>
    {/* <!-- Header --> */}
    <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div>
          {/* <!-- Card stats --> */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
              >
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div
                      className="relative w-full pr-4 max-w-full flex-grow flex-1"
                    >
                      <h5
                        className="text-slate-400 uppercase font-bold text-xs"
                      >
                        Traffic
                      </h5>
                      <span className="font-semibold text-xl text-slate-700">
                        350,897
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div
                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                      >
                        <i className="far fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    <span className="text-emerald-500 mr-2">
                      <i className="fas fa-arrow-up"></i> 3.48%
                    </span>
                    <span className="whitespace-nowrap">
                      Since last month
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
              >
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div
                      className="relative w-full pr-4 max-w-full flex-grow flex-1"
                    >
                      <h5
                        className="text-slate-400 uppercase font-bold text-xs"
                      >
                        New users
                      </h5>
                      <span className="font-semibold text-xl text-slate-700">
                        2,356
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div
                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                      >
                        <i className="fas fa-chart-pie"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    <span className="text-red-500 mr-2">
                      <i className="fas fa-arrow-down"></i> 3.48%
                    </span>
                    <span className="whitespace-nowrap"> Since last week </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
              >
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div
                      className="relative w-full pr-4 max-w-full flex-grow flex-1"
                    >
                      <h5
                        className="text-slate-400 uppercase font-bold text-xs"
                      >
                        Sales
                      </h5>
                      <span className="font-semibold text-xl text-slate-700">
                        924
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div
                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                      >
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    <span className="text-orange-500 mr-2">
                      <i className="fas fa-arrow-down"></i> 1.10%
                    </span>
                    <span className="whitespace-nowrap"> Since yesterday </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
              >
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div
                      className="relative w-full pr-4 max-w-full flex-grow flex-1"
                    >
                      <h5
                        className="text-slate-400 uppercase font-bold text-xs"
                      >
                        Performance
                      </h5>
                      <span className="font-semibold text-xl text-slate-700">
                        49,65%
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div
                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"
                      >
                        <i className="fas fa-percent"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                    <span className="text-emerald-500 mr-2">
                      <i className="fas fa-arrow-up"></i> 12%
                    </span>
                    <span className="whitespace-nowrap">
                      Since last month
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 md:px-10 mx-auto w-full -m-24">
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700"
          >
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6
                    className="uppercase text-slate-100 mb-1 text-xs font-semibold"
                  >
                    Overview
                  </h6>
                  <h2 className="text-white text-xl font-semibold">
                    Sales value
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              {/* <!-- Chart --> */}
              <div className="relative h-350-px">
                <canvas id="line-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6
                    className="uppercase text-slate-400 mb-1 text-xs font-semibold"
                  >
                    Performance
                  </h6>
                  <h2 className="text-slate-700 text-xl font-semibold">
                    Total orders
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 flex-auto">
              {/* <!-- Chart --> */}
              <div className="relative h-350-px">
                <canvas id="bar-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div
                  className="relative w-full px-4 max-w-full flex-grow flex-1"
                >
                  <h3 className="font-semibold text-base text-slate-700">
                    Page visits
                  </h3>
                </div>
                <div
                  className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                >
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* <!-- Projects table --> */}
              <table
                className="items-center w-full bg-transparent border-collapse"
              >
                <thead>
                  <tr>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Page name
                    </th>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Visitors
                    </th>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Unique users
                    </th>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Bounce rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      /argon/
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      4,569
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      340
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      /argon/index.html
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      3,985
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      319
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      /argon/charts.html
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      3,513
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      294
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      /argon/tables.html
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      2,050
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      147
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      50,87%
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      /argon/profile.html
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      1,795
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      190
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div
                  className="relative w-full px-4 max-w-full flex-grow flex-1"
                >
                  <h3 className="font-semibold text-base text-slate-700">
                    Social traffic
                  </h3>
                </div>
                <div
                  className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                >
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* <!-- Projects table --> */}
              <table
                className="items-center w-full bg-transparent border-collapse"
              >
                <thead className="thead-light">
                  <tr>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Referral
                    </th>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Visitors
                    </th>
                    <th
                      className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      Facebook
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      1,480
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div
                            className="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                          >
                            <div
                              style={{width: "60%"}}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      Facebook
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      5,480
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">70%</span>
                        <div className="relative w-full">
                          <div
                            className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                          >
                            <div
                              style={{width: "70%"}}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      Google
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      4,807
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">80%</span>
                        <div className="relative w-full">
                          <div
                            className="overflow-hidden h-2 text-xs flex rounded bg-purple-200"
                          >
                            <div
                              style={{width: "80%"}}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      Instagram
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      3,678
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">75%</span>
                        <div className="relative w-full">
                          <div
                            className="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"
                          >
                            <div
                              style={{width: "75%"}}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                    >
                      twitter
                    </th>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      2,645
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">30%</span>
                        <div className="relative w-full">
                          <div
                            className="overflow-hidden h-2 text-xs flex rounded bg-orange-200"
                          >
                            <div
                              style={{width: "30%"}}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div
            className="flex flex-wrap items-center md:justify-between justify-center"
          >
            <div className="w-full md:w-4/12 px-4">
              <div
                className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left"
              >
                Copyright © <span id="get-current-year"></span>
                <a
                  href="https://www.creative-tim.com?ref=njs-dashboard"
                  className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul
                className="flex flex-wrap list-none md:justify-end justify-center"
              >
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=njs-dashboard"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njs-dashboard"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=njs-dashboard"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-dashboard"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
    </>
  );
}

export default Admin;