import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type CardProps = {
    title: string,
    image: StaticImageData,
    name: string,
    link: string
}

function Card(props: CardProps): JSX.Element {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">{props.title}</h2>
            <div className="relative flex justify-center">
                <Image className="" src={props.image} alt="banana pancakes"/>
                <div
                    className="absolute bottom-4 text-charcoal bg-white h-12 w-72 flex justify-center items-center rounded shadow">{props.name}
                </div>
            </div>
            <Link href={props.link} className="flex justify-end my-4">
                <button
                    className="h-10 w-24 text-white text-sm font-extralight bg-asparagus rounded animate-pulse motion-reduce:hover:animate-pulse">See
                    all
                </button>
            </Link>
        </div>

    )
}

export default Card;