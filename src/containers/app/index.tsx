import React from 'react';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from 'components/protected-route';
import Dashboard from 'containers/dashboard';
import { useAuthHandler } from 'utils/auth';
import Login from 'containers/login';
import Background from 'components/background';
import Navbar from 'containers/navbar';

function App() {
  const isAuthenticated = useAuthHandler();

  // a note: For the sake of time, I will do the video as a background and the content sitting on top w/ absolute positioning like this, But I think this wierd css haha
  return (
    <div className={styles.root}>
      <Background />
      <div className={styles.content_wrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
