'use client'

import React from "react";
import Image from "next/image";
import spinach from "../../public/spinachi.png"
import Link from "next/link";

const About: React.FC = () => {
    return (
        <section className="relative w-full pt-16">
            <div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-center text-5xl font-light text-charcoal "><span
                        className="text-asparagus">So</span>Yummy</h1>
                    <p className="text-sm text-darkGray text-center pr-12 pl-12">"What to cook?" is not only a recipe
                        app, it is, in fact, your cookbook. You can add your own recipes
                        to save them for the future.</p>
                </div>
                <div
                    className="flex flex-col p-6 mt-6 justify-center items-center bg-salad-bowl h-80 bg-center bg-no-repeat ">
                    <div className="flex flex-col bg-white ml-20 mr-4 rounded-lg p-2">
                        <p className="text-charcoal text-xs"><span
                            className="text-asparagus">Delicious and healthy</span> way to enjoy a variety of fresh
                            ingredients in one satisfying meal</p>
                        <button className="flex justify-end">
                            <Link className="text-xss" href="/">See recipes &gt;</Link>
                        </button>
                    </div>
                </div>
            </div>
            <form className="flex justify-center items-center relative z-10">
                <input className="w-44 p-3 rounded-2xl bg-fern outline-none" type={"text"}/>
                <button
                    className="bg-charcoal border-1 border-darkGray p-3 rounded-bl-3xl rounded-br-2xl rounded-tl-2xl rounded-tr-3xl text-white text-sm relative right-8 hover:animate-bounce motion-reduce:animate-bounce">Search
                </button>
            </form>
            <div className="absolute top-0 bottom-0 left-0 right-0">
                <Image src={spinach} alt="background" className="w-1/2 h-1/2 relative right-36 -rotate-12 blur-xs"/>
                <Image src={spinach} alt="background"
                       className="w-full h-full bg-fern rounded-full blur-xs -rotate-200 relative left-64 bottom-36 -z-10"/>
                <Image src={spinach} alt="background"
                       className="w-3/4 h-3/4 relative right-28 bottom-96 -rotate-65 blur-xs"/>
            </div>

        </section>
    );
};

export default About;