import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from "./register";
import LoginPage from './login';
import DashboardPage from './dashboard';
import CutiPage from './pages/cuti';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/cuti' element={<CutiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App