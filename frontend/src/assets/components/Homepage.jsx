import React, { useEffect, useState } from "react";
import { Home, Compass, List, Clock } from "lucide-react";
import Navbar from "./Navbar";
import Box from "./Box";

const Homepage = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [genre, setGenre] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const NavItem = ({ icon, label }) => (
    <li className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
      {icon}
      <span>{label}</span>
    </li>
  );

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/songs`);
        const data = await response.json();
        setSongs(data);
        setLoading(false);
        setFilter(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
    const filteredSongs = selectedGenre
      ? songs.filter((song) => song.genre === selectedGenre)
      : songs;
    setFilter(filteredSongs);
  };

  useEffect(() => {
    const filtered = songs.filter((song) =>
      song.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filtered);
  }, [search, songs]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <Navbar
        onSearchChange={setSearch}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <div className="flex">
        <main className="w-5/6 bg-slate-950  p-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-lg font-medium text-white">Genre</h1>
            <select
              className="p-2 bg-gray-800 border border-gray-400 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-600 transition duration-200"
              value={genre}
              onChange={(e) => handleGenreChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="love">Love</option>
              <option value="breakup">BreakUp</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Trending Songs in All Genres
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Explore the latest trends and get excited!
            </p>
            <div className="grid grid-cols-3 gap-12">
              {filter.map((song) => (
                <Box key={song._id} songId={song._id} title={song.title} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Homepage;
