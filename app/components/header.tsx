'use client'

import React from "react";
import Image from "next/image";
import logo from "../../public/header-logo.jpg";
import avatar from "../../public/avatar-ex.png";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <Link className="rounded-xl w-10 h-10 bg-greeme flex items-center justify-center" href="/">
                <Image src={logo} className="w-7 h-7" alt="logo"/>
            </Link>
            {/*//TODO: create a menu popping after clicking on the button below that lets user edit name, avatar and logout*/}
            <div className="flex items-center justify-center gap-4">
                <button className="flex gap-0.5 justify-center items-center bg-greeme rounded-xl p-0.5">
                    {/*//TODO: add fetching avatar and name from database*/}
                    <Image src={avatar} alt="avatar" className="rounded-full w-10 h-10"/>
                    <p className="text-white p-1">Olena</p>
                </button>
                <button className="">
                    {/*//TODO: move to .svg file and import here, create mobile menu*/}
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5" stroke="#22252A" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;