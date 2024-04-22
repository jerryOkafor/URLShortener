"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import logo from "./../icon-192.png";
import LogoutButton from "./logoutButton";
import useSession from "./useSession";

type HeadeProp = {
  loading?: boolean;
};
export default function Header({ loading }: HeadeProp = { loading: false }) {
  const { session, isLoading } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!isLoading && !session.isLoggedIn && pathName !== "/signup") {
      router.replace("/signin");
    }
  }, [isLoading, session.isLoggedIn, router, pathName]);

  return (
    <>
      <header>
        <div className="flex flex-col">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="URL Shortener Logo"
                  width={24}
                  height={24}
                />
                <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
                  Url Shortener
                </span>
              </a>
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/links"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Links
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jerryOkafor/URLShortener"
                      target="_blank"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row items-center lg:order-2 space-x-2">
                {!session.isLoggedIn ? (
                  <>
                    <a
                      href="/signin"
                      className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >
                      SignIn
                    </a>
                    <a
                      href="/signup"
                      className="text-gray-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      SignUp
                    </a>
                  </>
                ) : (
                  <>
                    <div className="flex flex-row space-x-4">
                      <h1>Welcome: </h1>
                      <h1>{session.username}</h1>
                    </div>

                    <LogoutButton />
                  </>
                )}
              </div>
            </div>
          </nav>
          {loading ? (
            <>
              <div className="w-full">
                <div className="h-0.5 w-full bg-pink-100 overflow-hidden">
                  <div className="progress w-full h-full bg-pink-500 left-right" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-0.5" />
            </>
          )}
        </div>
      </header>
    </>
  );
}
