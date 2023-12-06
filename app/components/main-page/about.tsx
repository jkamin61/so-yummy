import React from "react";
import Link from "next/link";

function About(): JSX.Element {
    return (
        <section
            className="w-full py-16 z-10 bg-spinach-bg bg-cover bg-no-repeat">
            <div>
                <div className="flex flex-col justify-center items-center gap-3"><h1
                    className="text-center text-5xl font-light text-charcoal "><span
                    className="text-asparagus">So</span>Yummy</h1>
                    <p className="text-sm text-darkGray text-center pr-12 pl-12">"What to cook?" is not only a recipe
                        app, it is, in fact, your cookbook. You can add your own recipes to save them for the
                        future.</p>
                </div>
                <div
                    className="flex flex-col p-6 mt-6 justify-center items-center bg-salad-bowl h-80 bg-center bg-no-repeat">
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
            <div className="m-auto flex items-center justify-center w-72 h-14 bg-asparagus rounded-full">
                <form className="flex justify-center items-center relative z-10"><input
                    className="w-44 p-3 rounded-2xl bg-white outline-none" type={"text"}/>
                    <button
                        className="bg-charcoal border-1 border-darkGray p-3 rounded-bl-3xl rounded-br-2xl rounded-tl-2xl rounded-tr-3xl text-white text-sm hover:animate-bounce motion-reduce:animate-bounce">Search
                    </button>
                </form>
            </div>
        </section>
    );
}

export default About;