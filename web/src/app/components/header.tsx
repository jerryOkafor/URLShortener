import Container from "@/app/components/container";
import Link from "next/link";
import logo from './../icon-192.png'
import Image from "next/image";


export default function Header() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <Image src={logo} alt="URL Shortener Logo" width={24} height={24}/>
                            <span
                                className="self-center ml-2 text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
                                Url Shortener
                            </span>
                        </a>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                             id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/links"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Links
                                    </a>
                                </li>
                                <li>
                                    <a href="/about"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/jerryOkafor/URLShortener"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Github
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <a href="#"*/}
                                {/*       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="#"*/}
                                {/*       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                        <div className="flex items-center lg:order-2">
                            <a href="#"
                               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                Log in
                            </a>
                            <a href="#"
                               className="text-gray-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                Connect
                            </a>
                            {/*<button data-collapse-toggle="mobile-menu-2" type="button"*/}
                            {/*        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
                            {/*        aria-controls="mobile-menu-2" aria-expanded="false">*/}
                            {/*    <span className="sr-only">Open main menu</span>*/}
                            {/*    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                            {/*         xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <path fill-rule="evenodd"*/}
                            {/*              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
                            {/*              clip-rule="evenodd"></path>*/}
                            {/*    </svg>*/}
                            {/*    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"*/}
                            {/*         xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <path fill-rule="evenodd"*/}
                            {/*              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                            {/*              clip-rule="evenodd"></path>*/}
                            {/*    </svg>*/}
                            {/*</button>*/}
                        </div>

                    </div>
                </nav>
            </header>
        </>
        // <header className="py-6">
        //     <Container>
        //         <nav className="flex-row space-x-5">
        //             <Link href="/">Home</Link>
        //             <Link href="/links">All links</Link>
        //             <Link href="/about">About</Link>
        //         </nav>
        //     </Container>
        // </header>
    )
}