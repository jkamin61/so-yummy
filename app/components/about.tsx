import React from "react";
import Image from "next/image";
import spinach from "../../public/spinachi.png"
import Link from "next/link";

const About: React.FC = () => {
    return (
        <section className="w-full pt-16 z-10">
            <div className="relative">
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-center text-5xl font-light text-charcoal "><span
                        className="text-asparagus">So</span>Yummy</h1>
                    <p className="text-sm text-darkGray text-center pr-12 pl-12">"What to cook?" is not only a recipe
                        app, it is, in fact, your cookbook. You can add your own recipes
                        to save them for the future.</p>
                </div>
                <div className="flex flex-col p-6 mt-6 justify-center items-center bg-salad-bowl h-80 bg-center bg-no-repeat">
                    <div className="flex flex-col bg-white ml-20 mr-4 rounded-lg p-2 shadow-charcoal shadow-sm">
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
                <input className="w-44 p-3 rounded-2xl bg-white outline-none" type={"text"}/>
                <button
                    className="bg-charcoal border-1 border-darkGray p-3 rounded-bl-3xl rounded-br-2xl rounded-tl-2xl rounded-tr-3xl text-white text-sm relative right-8 hover:animate-bounce motion-reduce:animate-bounce">Search
                </button>
            </form>
            <ul className="absolute top-0 left-0 right-0 bottom-0 -z-10 flex flex-col justify-center">
                <li className="">
                    <Image src={spinach} alt="background" className="relative blur-xs flex w-1/2 rotate-180"/>
                </li>
                <li className="bg-fern rounded-xl">
                    <Image src={spinach} alt="background" className="relative w-full h-full blur-xs rotate-90"/>
                </li>
            </ul>
        </section>
    );
};

export default About;