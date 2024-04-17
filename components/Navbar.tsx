'use client';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import logo from '@/assets/images/logo-white.png';
import { FaUserCircle } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pathname = usePathname();

  return (
    <nav className="border-b border-primary-foreground bg-primary">
      <div className="container">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <IoMenuSharp className="block h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link className="flex flex-shrink-0 items-center justify-center" href="/">
              <Image className="h-10 w-auto max-[325px]:hidden" src={logo} alt="PropertyPulse" />
              <span className="ml-2 hidden text-2xl font-bold text-primary-foreground md:block">CasaHub</span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex items-center  space-x-2">
                <Link
                  href="/"
                  className={`${pathname === '/' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground hover:bg-secondary hover:text-secondary-foreground'} rounded-md px-2 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${pathname === '/properties' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground hover:bg-secondary hover:text-secondary-foreground'} rounded-md px-2 py-2`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                  <Link
                    href="/properties/add"
                    className={`${pathname === '/properties/add' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground hover:bg-secondary hover:text-secondary-foreground'} rounded-md px-2 py-2`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!isLoggedIn && (
            <div className="mr-4 flex items-center justify-center gap-2 md:ml-4">
              <button className="hidden items-center justify-center rounded-md bg-secondary px-2 py-2 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground md:flex">
                <FaGoogle className="fa-brands fa-google mr-2 text-secondary-foreground" />
                <span className="text-sm">Login/Register</span>
              </button>
              <ThemeSwitch />
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Link href="/messages" className="group relative">
                <button
                  type="button"
                  className="relative flex rounded-full bg-secondary p-1 text-sm text-secondary-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-offset-ring"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <IoNotificationsOutline className="h-6 w-6" />
                </button>
                <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-destructive px-2 py-1 text-xs font-bold leading-none text-white">
                  2{/* <!-- TODO: Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-secondary-foreground text-sm text-secondary focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-offset-ring"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen((prevState) => !prevState)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <FaUserCircle className="h-8 w-8" />
                  </button>
                </div>
                {/* <!-- Profile dropdown --> */}
                {profileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary py-1 text-start shadow-lg ring-1 ring-ring ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href="/profile"
                      className={`${pathname === '/profile' ? 'bg-primary text-primary-foreground' : 'text-secondary-foreground hover:bg-primary hover:text-primary-foreground'} block px-4 py-2 text-sm`}
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className={`${pathname === '/properties/saved' ? 'bg-primary text-primary-foreground' : 'text-secondary-foreground hover:bg-primary hover:text-primary-foreground'} block px-4 py-2 text-sm`}
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Saved Properties
                    </Link>
                    <button
                      className="block w-full bg-secondary px-4 py-2 text-start text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
              <ThemeSwitch />
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {mobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-2 px-2 pb-3 pt-2 text-center">
            <Link
              href="/"
              className={`${
                pathname === '/' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground'
              } block rounded-md px-3 py-2 text-base font-medium `}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`${
                pathname === '/properties' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground'
              } block rounded-md px-3 py-2 text-base font-medium `}
            >
              Properties
            </Link>
            {isLoggedIn && (
              <Link
                href="/properties/add"
                className={`${
                  pathname === '/properties/add' ? 'bg-secondary text-secondary-foreground' : 'text-primary-foreground'
                } block rounded-md px-3 py-2 text-base font-medium `}
              >
                Add Property
              </Link>
            )}
            {!isLoggedIn && (
              <button className="mx-auto flex items-center justify-center rounded-md bg-secondary px-2 py-2 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground">
                <FaGoogle className="fa-brands fa-google mr-2 text-secondary-foreground" />
                <span className="text-sm">Login/Register</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
