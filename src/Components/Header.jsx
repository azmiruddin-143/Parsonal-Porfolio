import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/main-logo-website.png'

const Header = () => {
    return (
        <div className='2xl:mx-64 bg-base-100 sticky z-10 top-0 xl:mx-32 my-4 rounded-full lg:px-6 px-4 border'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='w-36' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:hidden">
                    <ul className="menu text-lg gap-8 menu-horizontal px-1">
                    <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Contact
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end w-full">
                    <ul className="menu hidden lg:flex text-lg gap-8 menu-horizontal px-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                 isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-[#72b626] " : "text-black"
                            }
                        >
                            Contact
                        </NavLink>
                    </ul>

                    {/* dark mode */}

                    <div className='flex items-center gap-5 pl-5 '>

                        {/* <label className="flex cursor-pointer gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input type="checkbox" value="dark" className="toggle theme-controller" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label> */}

                        <button className='uppercase sm:py-2 py-1 px-3 sm:text-md text-sm sm:px-4 bg-[#72b626] rounded-full text-[white] font-bold'>Hire Me</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;