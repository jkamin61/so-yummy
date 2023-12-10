import Image from "next/image";
import order from "@/public/order-food.png";
import Link from "next/link";

function Register(): JSX.Element {
    return (
        <section className="container text-whitish h-screen">
            <div className="flex justify-center items-center relative bg-white p-6 w-full">
                <Image src={order} alt="Food order image"/>
            </div>
            <div className="flex justify-center items-center">
                <form
                    className="absolute z-10 m-auto flex gap-2 mt-56 flex-col justify-start items-start bg-shadowNavy-light h-72 rounded-3xl mx-3 p-8">
                    <h3 className="text-xl">Login</h3>
                    <input
                        style={{backgroundPosition: "10px 10px"}}
                        className="bg-transparent h-10 font-poppins border border-zinc-500 rounded bg-mail-01 bg-no-repeat pl-8 text-sm bg-left outline-0"
                        type="email"
                        placeholder="Email"/>
                    <input
                        style={{backgroundPosition: "10px 10px"}}
                        className="bg-transparent h-10 font-poppins border border-zinc-500 rounded bg-lock-02 bg-no-repeat pl-8 text-sm bg-left outline-0"
                        type="password"
                        placeholder="Password"/>
                    <button className="h-10 w-full mt-2 bg-asparagus rounded font-poppins">Sign in</button>
                </form>
            </div>
            <div className="relative flex justify-center items-center bg-shadowNavy h-full w-full">
                <Link href="/" className="text-center pb-64 text-sm">
                    <u className="">Registration</u>
                </Link>
            </div>
        </section>
    );
}

export default Register;