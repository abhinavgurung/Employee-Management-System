import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import RootLayout from './components/RootLayout';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path="signup" element={<Signup />}></Route>
    <Route path="login" element={<LoginPage />}></Route>
  </Route>
);

const router = createBrowserRouter(routes);

export function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
