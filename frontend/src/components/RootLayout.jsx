import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
