import Image, {StaticImageData} from "next/image";

type CardProps = {
    title: string,
    image: StaticImageData,
    name: string
}

function Card(props: CardProps): JSX.Element {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">{props.title}</h2>
            <div className="relative flex justify-center">
                <Image className="" src={props.image} alt="banana pancakes"/>
                <div
                    className="absolute bottom-4 text-charcoal bg-white h-12 w-72 flex justify-center items-center rounded shadow">{props.name}
                </div>
            </div>
        </>

    )
}

export default Card;