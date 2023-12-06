import Card from "../card";
import Link from "next/link";
import {StaticImageData} from "next/image";
import pancakes from "../../../public/banana-pancakes.png";
import por from "../../../public/portugese-prego-por.png";
import teriyaki from "../../../public/tariyaki-chicken.png";
import fool from "../../../public/blackberry-fool.png";

const breakfasts: { name: string, image: StaticImageData, title: string, link: string } = {
    name: "Banana Pancakes",
    image: pancakes,
    title: "Breakfast",
    link: "/"
}
const miscellaneous: { name: string, image: StaticImageData, title: string, link: string } = {
    name: "Portuguese prego Por",
    image: por,
    title: "Miscellaneous",
    link: "/"
}
const vegan: { name: string, image: StaticImageData, title: string, link: string } = {
    name: "Teriyaki Chicken Casserole",
    image: teriyaki,
    title: "Vegan",
    link: "/"
}
const desserts: { name: string, image: StaticImageData, title: string, link: string } = {
    name: "Blackberry Fool",
    image: fool,
    title: "Desserts",
    link: "/"
}

function previewCategories(): JSX.Element {
    return (
        <section className="container p-4">
            <Card image={breakfasts.image} name={breakfasts.name} title={breakfasts.title} link={breakfasts.link}/>
            <Card image={miscellaneous.image} name={miscellaneous.name} title={miscellaneous.title}
                  link={miscellaneous.link}/>
            <Card image={vegan.image} name={vegan.name} title={vegan.title}
                  link={vegan.link}/>
            <Card image={desserts.image} name={desserts.name} title={desserts.title}
                  link={desserts.link}/>
            <Link href="/"
                  className="flex justify-center my-12 items-center h-10 w-48 border border-asparagus rounded-2xl m-auto hover:animate-bounce motion-reduce:hover:animate-bounce">
                <p>Other categories</p>
            </Link>
        </section>
    );
}

export default previewCategories;