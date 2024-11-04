import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      {/** Header & Navigation */}
      <h1>Administration</h1>
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  )
}

export default AdminLayout;