'use client';

import '../styles/globals.css';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <Sidebar />
          <div className="main-content">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}