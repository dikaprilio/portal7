'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.href = '/en';
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#1a1d24', color: '#f0f0f0' }}>
      <p>Loading Portal 8...</p>
    </div>
  );
}
