import React from 'react';
import { useAuth } from '../config/firebase';

export default function Dashboard() {
  const currentUser = useAuth();
  return <div>Hello,{currentUser?.email} from Dashboard</div>;
}
