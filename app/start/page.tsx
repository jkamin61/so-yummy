import Image from "next/image";
import logo from "@/public/logo.png";

function Start(): JSX.Element {
    return (
        <div
            className="container h-full fixed bg-ronise-daluz bg-no-repeat bg-cover flex flex-col items-center justify-center text-whitish">
            <Image src={logo}
                   className="rounded-xl w-12 h-12 bg-asparagus flex items-center justify-center hover:animate-pulse"
                   alt="logo"/>
            <h2 className="text-2xl">Welcome to the app!</h2>
            <p className="p-8 text-center text-sm font-poppins leading-5">This app offers more than just a
                collection
                of
                recipes - it
                is
                designed
                to be
                your very own digital
                cookbook. You can easily save and retrieve your own recipes at any time.</p>
            <div className="flex gap-2 text-sm font-poppins">
                <button
                    className="bg-asparagus w-32 h-10 rounded-lg hover:animate-pulse motion-reduce:hover:animate-pulse">Registration
                </button>
                <button
                    className="border border-white w-24 h-10 rounded-lg hover:animate-pulse motion-reduce:hover:animate-pulse">Sign
                    in
                </button>
            </div>
        </div>
    );
}

export default Start;