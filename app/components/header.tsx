'use client'

import React from "react";
import Image from "next/image";
import logo from "../../public/header-logo.jpg";
import avatar from "../../public/avatar-ex.png";
import spinach from "../../public/spinachi.png"
import Switch from '@mui/material/Switch';
import Link from "next/link";

type Navigation = {
    name: string,
    href: string
}

const navigation: Navigation[] = [
    {name: 'Categories', href: '#'},
    {name: 'Add recipes', href: '#'},
    {name: 'My recipes', href: '#'},
    {name: 'Favorites', href: '#'},
    {name: 'Shopping list', href: '#'},
]

const label = {inputProps: {'aria-label': 'Switch demo'}};

const Header: React.FC = () => {
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false)
    const [mobileMenu, setMobileMenu] = React.useState<boolean>(false)
    return (
        <header>
            {!mobileMenu &&
                <div className="flex items-center p-4 justify-between">
                    <Link
                        className="rounded-xl w-10 h-10 bg-asparagus flex items-center justify-center hover:animate-pulse"
                        href="/">
                        <Image src={logo} className="w-7 h-7" alt="logo"/>
                    </Link>
                    {/*//TODO: loggedin? create a menu popping after clicking on the button below that lets user edit name, avatar and logout : login */}
                    <div className="flex items-center justify-center gap-4">
                        <button
                            className="flex gap-0.5 justify-center items-center bg-asparagus rounded-xl p-0.5 hover:animate-pulse">
                            {/*//TODO: add fetching avatar and name from database*/}
                            {loggedIn &&
                                <>
                                    <Image src={avatar} alt="avatar" className="rounded-full w-10 h-10"/>
                                    <p className="text-white p-1">Olena</p>
                                </>}
                            {!loggedIn && <p className="text-white p-1">Log in</p>}
                        </button>
                        <button onClick={() => setMobileMenu(true)}>
                            {/*//TODO: move to .svg file and import here, create mobile menu*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                 fill="none">
                                <path d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5" stroke="#22252A" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>}
            {mobileMenu &&
                <div
                    className=" flex-col fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-fern text-charcoal">
                    <div className="flex justify-between items-center w-full p-4">
                        <Link
                            className="rounded-xl w-10 h-10 bg-asparagus flex items-center justify-center hover:animate-pulse"
                            href="/">
                            <Image src={logo} className="w-7 h-7" alt="logo"/>
                        </Link>
                        <button  onClick={() => setMobileMenu(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                 fill="none">
                                <path d="M22.6673 9.33334L9.33398 22.6667M9.33398 9.33334L22.6673 22.6667"
                                      stroke="#22252A"
                                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="h-full">
                        <ul className="flex flex-col gap-8 p-14 pb-0 justify-center items-center">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="text-xl">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 justify-center items-center mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M9.16666 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16666C15.8333 5.48477 12.8486 2.5 9.16666 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16666C2.5 12.8486 5.48477 15.8333 9.16666 15.8333Z"
                                    stroke="#22252A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.5 17.5L13.875 13.875" stroke="#22252A" strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            <button className="text-xl">Search</button>
                        </div>
                    </nav>
                    <div className="flex justify-between w-full p-2 items-end">
                        <Switch {...label}/>
                        <Image src={spinach} alt="spinachi" className="w-32 h-32" layout="fixed"/>
                    </div>
                </div>}
        </header>
    );
}

export default Header;