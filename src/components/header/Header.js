import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { AuthState } from '../../context/AuthContext';

const Header = () => {
    const { user, logOut } = AuthState();
    console.log();

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
                            <Navbar.Toggle />
                        </div>
                    ) : (

                        <>
                            <Link to="/registration">
                                <div className="mr-3">
                                    <button className="bg-teal-400 rounded-lg px-5 py-2 text-white text-normal">Sign Up</button>
                                </div>
                            </Link>
                            <Link to="/login">
                                <div >
                                    <button className="bg-teal-400 rounded-lg px-5 py-2 text-white text-normal">Log in</button>
                                </div>
                            </Link>
                        </>
                    )}

                </div>
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        active={true}

                    >
                        Home
                    </NavLink>
                    <NavLink to="/courses">
                        Courses
                    </NavLink>
                    <NavLink to="/services">
                        Services
                    </NavLink>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                    <NavLink to="/faq">
                        Faq
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>

                </Navbar.Collapse>

            </Navbar>

        </div>
    )
}

export default Header
