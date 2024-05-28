import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import New from './components/New/New';
import Lectures from './components/Lectures/Lectures';
import './index.css';

const App = () => {
  const [section, setSection] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobileDevice) {
      alert('Not available on cell phones yet');
      window.close();
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setSection("dashboard");
      } else {
        setSection("login");
      }
    }
  }, []);

  return (
    <div>
      {section === "login" ? (
        <LoginForm setUser={setUser} setSection={setSection} />
      ) : section === "dashboard" ? (
        <Dashboard userName={user.user.username} setSection={setSection} />
      ) : section === "new" ? (
        <New setSection={setSection} />
      ) : section === "lectures" ? (
        <Lectures userName={user.user.username} setSection={setSection} />
      ) : null}
    </div>
  );
};

export default App;