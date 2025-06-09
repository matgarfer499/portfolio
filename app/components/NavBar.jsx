"use client";

import { useState } from "react";
import Links from "./Links";
import "../animations.css"
import "../blurIphone.css"

export function NavBar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <nav className="sticky top-2 flex z-50 w-full bg-transparent sm:top-4">
                <h2 className="text-3xl text-white font-bold flex justify-center pl-2 sm:pl-0">
                    MG
                    <span className="text-3xl text-orange-500 font-bold flex items-end">
                        .
                    </span>
                </h2>
                <button
                    onClick={toggleMenu}
                    className="w-1/2 flex sm:hidden justify-end items-center pr-2"
                >
                    {menu ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="white"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="white"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
                <div className="hidden sm:flex justify-center gap-10 text-center items-center m-auto border shadow-xl px-10 py-1 rounded-full">
                    <Links />
                </div>
            </nav>
            {(
                <div className={`w-full fixed sm:hidden z-40 top-0 iphone-blur flex flex-col gap-8 text-xl justify-center items-center menu ${menu ? 'isActive' : ''}`}>
                    <Links onClick={toggleMenu} />
                </div>
            )}
        </>
    );
}

export default NavBar;
