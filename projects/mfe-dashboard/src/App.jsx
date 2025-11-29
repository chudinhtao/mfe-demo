import { useState, useEffect } from 'react';

function App({ initialUser }) {
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    const handleUserChange = (event) => {
      setUser(event.detail);
    };

    window.addEventListener('mini-erp:user-changed', handleUserChange);

    return () => {
      window.removeEventListener('mini-erp:user-changed', handleUserChange);
    };
  }, []);

  return (
    <div style={{ border: '2px solid #61dafb', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: '#61dafb' }}> React Remote (Dashboard)</h2>

      {user ? (
        <div>
          <h1>Xin chào, {user.username}!</h1>
          <p>
            Role hiện tại: <strong>{user.role}</strong>
          </p>
        </div>
      ) : (
        <p style={{ color: 'gray' }}>Chưa có dữ liệu User từ Shell...</p>
      )}
    </div>
  );
}

export default App;
