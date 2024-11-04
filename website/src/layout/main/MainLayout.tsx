import { Outlet } from 'react-router-dom';
import PublicNav from '../publicNav';
import {leftNavLinks, rightNavLinks} from "../../Navigation";
import PublicFooter from '../PublicFooter';

function MainLayout() {
  return (
    <>
      <PublicNav title="Blue Ethics Project" leftNavLinks={leftNavLinks} rightNavLinks={rightNavLinks} opaque={true} />
      <main className="bg-slate-200 pt-16">
        <Outlet />
      </main>
      <PublicFooter />
    </>
  )
}

export default MainLayout;