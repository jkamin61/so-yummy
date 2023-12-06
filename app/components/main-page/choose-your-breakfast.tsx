import Image from "next/image";
import pancakes from "../../../public/banana-pancakes.png";

function ChooseYourBreakfast(): JSX.Element {
    return (
        <section className="container p-4">
            <h2 className="text-2xl font-bold mb-6">Breakfast</h2>
            <div className="relative flex justify-center">
                <Image className="" src={pancakes} alt="banana pancakes"/>
                <div
                    className="absolute bottom-4 text-charcoal bg-white h-12 w-72 flex justify-center items-center rounded shadow">Banana
                    Pancakes
                </div>
            </div>
            <div className="flex justify-end my-4">
                <button className="h-10 w-24 text-white text-sm font-extralight bg-asparagus rounded">See all</button>
            </div>
        </section>
    );
}

export default ChooseYourBreakfast;