import { Link, Outlet } from 'react-router-dom';

function MinimalLandingLayout() {
  return (
    <>
      <header className="py-4 px-6 bg-gray-800 shadow-lg">
        <Link to="/" className="text-blue-300 font-bold text-lg hover:underline">
          <img src="/BlueEthics.svg" alt="Blue Ethics Project Logo" className="inline-block h-8 mr-2" />
          Blue Ethics Project
        </Link>
      </header>
      <main className="py-12 px-6">
        <Outlet />
      </main>
    </>
  )
}

export default MinimalLandingLayout;