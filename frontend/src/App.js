import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import RootLayout from './components/RootLayout';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ForgotPasswordPage from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<LandingPage />}></Route>
    <Route path="signup" element={<Signup />}></Route>
    <Route path="login" element={<LoginPage />}></Route>
    <Route path="forgot-password" element={<ForgotPasswordPage />}></Route>
    <Route path="admin-dashboard" element={<AdminDashboard />}></Route>
  </Route>
);

const router = createBrowserRouter(routes);

export function App() {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}
