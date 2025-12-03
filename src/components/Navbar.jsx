import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-[#222222] flex justify-center shadow-md p-4 mx-80 mt-8 rounded-3xl gap-8">
        <Link className="text-gray-100" to="/">Home</Link>
        <Link className="text-gray-100" to="/movies">Movies</Link>
        <Link className="text-gray-100" to="/dashboard">Dashboard</Link>
        <Link className="text-gray-100" to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
