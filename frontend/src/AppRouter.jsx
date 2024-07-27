import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import EditUser from './pages/EditUser';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './pages/Users';
import CreateImplement from './pages/Implement';
import GetImplement from './pages/GetImplement';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Rutas protegidas */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/users" 
        element={
          <ProtectedRoute allowedRoles={['administrador']}>
            <Users />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/edit-user/:rut" 
        element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/crear-implemento" 
        element={
          <ProtectedRoute allowedRoles={['administrador', 'encargado']}>
            <CreateImplement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/obtener-implementos" 
        element={
          <ProtectedRoute>
            <GetImplement />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
