import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingLayout from './layout/landing/LandingLayout';
import MinimalLandingLayout from './layout/landing_min/MinimalLandingLayout';
import Home from './pages/Main/Home';
import Entities from './pages/Main/Entities';
import EntityDetails from './pages/Main/EntityDetails';
import EmployeeDetails from "./pages/Main/EmployeeDetails";
import Report from './pages/Main/Report';
import Publications from './pages/Main/Publications';

import MainLayout from './layout/main/MainLayout';
import Main from './pages/Main';

import AdminLayout from './layout/admin/AdminLayout';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MinimalLandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="/entities/:id" element={<EntityDetails />} />
          <Route path="/entities/:id/employees/:employeeId" element={<EmployeeDetails />} />
          <Route path="/report" element={<Report />} />
          <Route path="/publications" element={<Publications />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/main" element={<Main />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
