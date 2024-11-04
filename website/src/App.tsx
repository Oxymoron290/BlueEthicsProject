import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingLayout from './layout/landing/LandingLayout';
import Home from './pages/Home';

import MainLayout from './layout/main/MainLayout';
import Main from './pages/Main';

import AdminLayout from './layout/admin/AdminLayout';
import Admin from './pages/Admin';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
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
