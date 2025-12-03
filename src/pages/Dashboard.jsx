import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <Link to="profile" className="hover:bg-gray-700 p-2 rounded">
          Profile
        </Link>

        <Link to="settings" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
