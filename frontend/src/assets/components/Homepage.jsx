import React, { useEffect, useState } from "react";
import { Home, Compass, List, Clock } from "lucide-react";
import Podcasts from "./Podcasts";
import Box from "./Box";

const Homepage = () => {
  const [songs, setSongs] = useState([]);
  const[Loading,setLoading]=useState(true);
  const [Filter,setFilter]=useState([]);
  const [Pod,setPod]=useState("songs")
  const [Genre,setGenre]=useState();
  const NavItem = ({ icon, label }) => (
    <li className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
      {icon}
      <span>{label}</span>
    </li>
  );

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${Pod}`);
        const data = await response.json();
        setSongs(data);
        setLoading(!Loading);
        setFilter(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

  const genre=(a)=>{
    setGenre(a);
    const fl=a ? songs.filter((song)=>song.genre===a) : songs;
    setFilter(fl);
    console.log(Filter);
  }
  
  return (
    <>
      <div className="flex flex-row justify-between text-white">
        <div className="flex bg-slate-950 text-white min-h-screen">
          <nav className="w-52 p-4 flex flex-col border-r border-slate-700 sticky top-0 h-screen bg-slate-950 z-50">
            <div className="mb-12 text-3xl text-left pl-7 font-bold mt-4">
              Podify
            </div>
            <ul className="space-y-5 text-sm ml-4">
              <NavItem icon={<Home size={18} />} label="Home" />
              <NavItem icon={<Compass size={18} />} label="Discover" />
              <NavItem icon={<List size={18} />} label="My Queue" />
              <NavItem icon={<List size={18} />} label="My Podcasts" />
              <NavItem icon={<Clock size={18} />} label="Recents" />
            </ul>
          </nav>
        </div>
        <div className="w-5/6 bg-slate-950">
          <div className="flex flex-row justify-between items-center h-14 border-b border-slate-800 sticky top-0 bg-slate-950 z-50">
            <div className="relative flex-1 p-2">
              <input
                type="text"
                placeholder="Search through over 70 million podcasts and episodes"
                className="w-4/5 bg-slate-800 rounded-md h-10 pl-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-row gap-4 pr-10">
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm">
                Log in
              </button>
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded text-sm">
                Sign up
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-medium text-white">Genre</h1>
            <select 
              className="p-2 bg-gray-800 border border-gray-400 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-600 transition duration-200"
              defaultValue="default"
              onChange={(e)=>{genre(e.target.value)}}
            >
              <option value="default" disabled>Select a genre</option>
              <option value="">All</option>
              <option value="love">love</option>
              <option value="breakup">BreakUp</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>


          <section className="mt-6 px-9">
            <h2 className="text-lg font-semibold">Trending Songs in All Genres</h2>
            <p className="text-sm text-gray-400">Explore the latest trends and get excited!</p>
            <div className="grid grid-cols-3 gap-12 mt-6">
              {Filter.map((song) => (
                <Box key={song._id} songId={song._id} title={song.title} />
              ))}
            </div>
          </section>

          {/* <section className="mt-10 px-9">
            <h2 className="text-lg font-semibold">The Gray Area's Podcast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-64 border border-gray-300 rounded-lg shadow-lg bg-slate-700"
                >
                  <a href="#">
                    <img
                      className="p-4 rounded-t-lg"
                      src="/img/p2.jpg"
                      alt="product image"
                    />
                  </a>
                  <div className="p-4">
                    <a href="#">
                      <h5 className="text-lg font-medium text-white">
                        Gray Area Live
                      </h5>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
