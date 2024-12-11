import React from "react";
import { Home, Compass, List, Clock } from "lucide-react";

const Navbar = ({ onSearchChange, onLogin, onLogout, isLoggedIn }) => {
  const NavItem = ({ icon, label }) => (
    <li className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
      {icon}
      <span>{label}</span>
    </li>
  );

  return (
    <nav className="flex items-center justify-between bg-black text-white h-14 px-4 ring-1  ring-slate-500 mx-5 rounded-lg  border-slate-800 sticky top-5 z-50">
      <div className="text-2xl font-bold font-5">Podify</div>
      <ul className="flex items-center space-x-6 text-sm ml-20 font-2 ">
        <NavItem icon={<Home size={16} />} label="Home" />
        <NavItem icon={<Compass size={16} />} label="Discover" />
        <NavItem icon={<List size={16} />} label="My Queue" />
        <NavItem icon={<Clock size={16} />} label="Recents" />
      </ul>

      <div className="flex-1 mx-40 ">
        <input
          type="text"
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search through over 70 million podcasts and episodes"
          className="w-full bg-slate-800 rounded-md h-10 px-3 text-sm text-white font-2  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>

      <div className="flex items-center gap-4 font-2">
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={onLogin}
              className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm"
            >
              Login
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm">
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
