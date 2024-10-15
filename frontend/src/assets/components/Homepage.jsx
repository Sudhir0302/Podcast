import React, { useEffect } from 'react'
import { Home, Compass, List, Clock, Search } from 'lucide-react';
import Podcasts from './Podcasts';



const Homepage = () => {
    const NavItem = ({ icon, label }) => (
        <li className="flex items-center space-x-4 text-gray-300 hover:text-white cursor-pointer">
            {icon}
            <span>{label}</span>
        </li>
    );

    return (
        <>
        <PlaySong />
        <div className='flex flex-row justify-between text-white sticky top-0 left-0 right-0'>
            <div className="flex   bg-slate-950 text-white min-h-screen ">
                <nav
                    className="w-52 p-4 flex flex-col border-r border-slate-700 sticky top-0 h-screen bg-slate-950 z-100"
                >
                    <div className="mb-12 text-3xl">
                        <div className="text-left pl-7 font-5 mt-4 ">Podify</div>
                    </div>

                    <ul className="space-y-4 text-sm font-2 ml-4">
                        <NavItem icon={<Home size={18} />} label="Home" />
                        <NavItem icon={<Compass size={18} />} label="Discover" />
                        <NavItem icon={<List size={18} />} label="My Queue" />
                        <NavItem icon={<List size={18} />} label="My Podcasts" />
                        <NavItem icon={<Clock size={18} />} label="Recents" />
                    </ul>


                </nav>
            </div>
            <div className=' w-5/6 bg-slate-950 font-2'>
                <div className='flex flex-row  justify-between h-14 border-b border-slate-800 sticky top-0 bg-slate-950 z-50'>
                    <div className="relative flex-1 p-2 h-12">
                        <input
                            type="text"
                            placeholder="Search through over 70 million podcasts and episodes"
                            className="w-4/5 bg-slate-800 rounded-md h-10 pl-2  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>
                    <div className=' flex flex-row pr-10 gap-5 pt-2'>
                        <div>
                            <button className="bg-blue-800 hover:bg-slate-700 text-white font-semibold py-1 px-2 rounded text-sm">
                                Log in
                            </button>
                        </div>
                        <div>
                            <button className="bg-blue-800 hover:bg-slate-700 text-white font-semibold py-1 px-2 rounded text-sm">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mt-6 pb-2 pl-9 '>
                        <h2 className='text-md font-3 text-left '>Trending podcasts in all genres</h2>
                        <p className='text-sm text-left'>Explore the latest trends and get excited!</p>
                    </div>
                    <div className='px-10 font-5 border-b pb-9 border-slate-700'>
                        <div className='flex flex-row justify-between gap-7 '>
                            <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                                <a href="#">
                                    <img class="p-4 rounded-t-lg" src="/img/p1.jpg" alt="product image" />
                                </a>
                                <div class="pb-3">
                                    <a href="#">
                                        <h5 class="text-xl tracking-tight text-gray-900 dark:text-white">Wave dream live </h5>
                                    </a>
                                </div>
                            </div>
                            <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                                <a href="#">
                                    <img class="p-4 rounded-t-lg" src="/img/p1.jpg" alt="product image" />
                                </a>
                                <div class="">
                                    <a href="#">
                                        <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Wave dream live </h5>
                                    </a>
                                </div>
                            </div>
                            <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                                <a href="#">
                                    <img class="p-4 rounded-t-lg" src="/img/p1.jpg" alt="product image" />
                                </a>
                                <div class="">
                                    <a href="#">
                                        <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Wave dream live </h5>
                                    </a>
                                </div>
                            </div>
                            <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                                <a href="#">
                                    <img class="p-4 rounded-t-lg" src="/img/p1.jpg" alt="product image" />
                                </a>
                                <div class="">
                                    <a href="#">
                                        <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Wave dream live </h5>
                                    </a>


                                </div>
                            </div>
                            <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                                <a href="#">
                                    <img class="p-4 rounded-t-lg" src="/img/p1.jpg" alt="product image" />
                                </a>
                                <div class="">
                                    <a href="#">
                                        <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Wave dream live </h5>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6 ml-9 pb-2 '>
                    <h2 className='text-md font-3 text-left '>The Gray area's podcast</h2>
                    {/* <p className='text-sm text-left'>Explore the latest trends and get excited!</p> */}
                </div>
                <div className='px-10 font-5 border-b pb-9 border-slate-700'>
                    <div className='flex flex-row justify-between gap-7 '>
                        <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                            <a href="#">
                                <img class="p-4 rounded-t-lg" src="/img/p2.jpg" alt="product image" />
                            </a>
                            <div class="pb-3">
                                <a href="#">
                                    <h5 class="text-xl tracking-tight text-gray-900 dark:text-white">Gray Area live </h5>
                                </a>
                            </div>
                        </div>
                        <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                            <a href="#">
                                <img class="p-4 rounded-t-lg" src="/img/p2.jpg" alt="product image" />
                            </a>
                            <div class="">
                                <a href="#">
                                    <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Gray Area live </h5>
                                </a>
                            </div>
                        </div>
                        <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                            <a href="#">
                                <img class="p-4 rounded-t-lg" src="/img/p2.jpg" alt="product image" />
                            </a>
                            <div class="">
                                <a href="#">
                                    <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Gray Area live </h5>
                                </a>
                            </div>
                        </div>
                        <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                            <a href="#">
                                <img class="p-4 rounded-t-lg" src="/img/p2.jpg" alt="product image" />
                            </a>
                            <div class="">
                                <a href="#">
                                    <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Gray Area live </h5>
                                </a>


                            </div>
                        </div>
                        <div class="w-64 max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-700 dark:border-gray-700">
                            <a href="#">
                                <img class="p-4 rounded-t-lg" src="/img/p2.jpg" alt="product image" />
                            </a>
                            <div class="">
                                <a href="#">
                                    <h5 class="text-xl  tracking-tight text-gray-900 dark:text-white">Gray Area live </h5>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Podcasts />
        </div>
        </>
    )
}

export default Homepage