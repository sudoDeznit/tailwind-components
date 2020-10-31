import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Button } from '@components/ui';
import { Navlink } from '../../index';

const Navbar = () => {
  const [width, setWidth] = useState(0);
  // The current width of the viewport
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  const mobileDevice: boolean = width < 767;
  const [isOpen, setIsOpen] = useState(!mobileDevice);

  return (
    <div>
      <nav className=" md:container bg-transparent mx-auto py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:px-4 xl:px-0">
          <div className="flex justify-between items-center px-2 md:px-0">
            <div className="flex items-center">
              <a href="/">
                <img src="deznit_logo.svg" alt="logo" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none"
                aria-label="toggle menu"
              >
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen && mobileDevice ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* ========== lg menu start ========== */}
          {!mobileDevice && (
            <div className="hidden mt-2 md:flex md:mt-0 md:mx-1">
              <Navlink href="/">Products</Navlink>

              {/* <Navlink href="/explore">Contact</Navlink> */}

              <Navlink href="/">About</Navlink>

              <Navlink href="/blog">Blog</Navlink>
            </div>
          )}
          {/* ========== lg menu end ========== */}
          <div
            className={classNames(
              {
                'block absolute mt-10 py-4 w-full bg-light shadow-lg border-t-2 border-primary ':
                  isOpen && mobileDevice,

                hidden: !isOpen,
                'md:flex': isOpen && mobileDevice,
              },
              'text-center md:text-left md:flex items-center '
            )}
          >
            {mobileDevice && (
              <div className="flex flex-col mt-2 md:hidden">
                <Navlink href="/">Products</Navlink>

                <Navlink href="/explore">About</Navlink>

                {/* <Navlink href="/">Forum</Navlink> */}

                <Navlink href="/blog">Blog</Navlink>
              </div>
            )}
            <div className="py-2">
              <Navlink href="/login">Login</Navlink>
              <Button variant="outline">Signup</Button>
            </div>
            <div className="mt-3 md:hidden flex justify-center">
              <input
                type="text"
                className="px-4 py-3 w-7/12 leading-6 text-base rounded-md placeholder-muted shadow-lg focus:outline-none bg-white "
                placeholder="Search"
                aria-label="Search"
              />
              <button type="button" className="btn ml-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
