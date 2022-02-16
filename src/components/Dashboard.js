import React from 'react';
import { useAuth, logout } from '../config/firebase';

export default function Dashboard() {
  const currentUser = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert('error!');
    }
  }
  return (
    <div>
      <h1>Hello,{currentUser?.email} from Dashboard</h1>
      {currentUser && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}
