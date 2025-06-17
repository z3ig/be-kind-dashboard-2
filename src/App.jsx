import React from 'react';
import BeKindDashboard from './BeKindDashboard';
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <header className="bg-white shadow sticky top-0 z-10 flex items-center px-4 py-2 border-b">
        <img src={logo} alt="Outlet Park Logo" className="h-8 mr-4" />
        <h1 className="text-xl font-semibold text-orange-600">Be Kind 2025 – Dashboard kampanii</h1>
      </header>
      <main className="p-6">
        <BeKindDashboard />
      </main>
      <footer className="text-center text-sm text-gray-500 p-4 border-t">
        © {new Date().getFullYear()} Outlet Park Szczecin
      </footer>
    </div>
  );
}
