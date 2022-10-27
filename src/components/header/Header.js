import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { AuthState } from '../../context/AuthContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
    const { user, logOut } = AuthState();
    console.log();

    //toggle button for dark mode
    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };


    const handleLogOut = () => {
        logOut()
            .then(() => {

            }).catch(() => {

            })
    }
    return (
        <div className='header'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">

                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        Tech-Academy
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {user?.uid ? (
                        <div className="drop_down">
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<img src={user?.photoURL} className='w-10 h-10 rounded-full' title={user?.displayName} alt={user?.displayName} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <span onClick={handleLogOut}> Sign out</span>
                                </Dropdown.Item>
                            </Dropdown>

                        </div>

                    ) : (
                        <Link to="/registration">
                            <div className="mr-3">
                                <button className="bg-teal-400 rounded-lg px-5 py-2 text-white text-normal">Sign Up</button>
                            </div>
                        </Link>
                    )
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='mt-2'>
                    <NavLink
                        to="/"
                        active={true}

                    >
                        Home
                    </NavLink>
                    <NavLink to="/courses">
                        Courses
                    </NavLink>
                    {/* <NavLink to="/services">
                        Services
                    </NavLink> */}
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                    <NavLink to="/faq">
                        Faq
                    </NavLink>
                    {/* <NavLink to="/contact">
                        Contact
                    </NavLink> */}

                    <div className="togle">
                        <label for="default-toggle-size" class="inline-flex relative items-center mb-5 cursor-pointer">
                            <input type="checkbox" value="" id="default-toggle-size" class="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark"></div>

                        </label>
                    </div>

                </Navbar.Collapse>

            </Navbar>

        </div>
    )
}

export default Header
