import { Outlet } from 'react-router-dom';
import AdminNav from '../AdminNav';

function AdminLayout() {
  return (
    <>
      <AdminNav title="Blue Ethics Project" />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  )
}

export default AdminLayout;