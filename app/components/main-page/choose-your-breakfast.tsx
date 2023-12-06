import pancakes from "../../../public/banana-pancakes.png";
import Card from "../card";
import {StaticImageData} from "next/image";

const breakfasts: { name: string, image: StaticImageData, title: string } = {
    name: "Banana Pancakes",
    image: pancakes,
    title: "Breakfast"
}

function ChooseYourBreakfast(): JSX.Element {
    return (
        <section className="container p-4">
            <Card image={breakfasts.image} name={breakfasts.name} title={breakfasts.title}/>
            <div className="flex justify-end my-4">
                <button className="h-10 w-24 text-white text-sm font-extralight bg-asparagus rounded">See all</button>
            </div>
        </section>
    );
}

export default ChooseYourBreakfast;