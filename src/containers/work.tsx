import { Stacks } from "../components/home/stacks";
import { Slide } from "react-reveal";

export const Work = ({
    data: { name, description, about, link, stacks },
}: {
    data: any;
}) => {
    return (
        <Slide bottom carousel>
            <div className="group transition ease-in-out delay-100 flex m-2 rounded-lg bg-zinc-800 hover:-translate-y-2 duration-500 ">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-6 text-left"
                >
                    <h5 className="transition ease-in-out delay-100 mb-2 font-extrabold group-hover:text-yellow-300 duration-500">
                        {name}
                    </h5>
                    <h6 className="transition ease-in-out delay-100 mb-2 font-bold text-sm group-hover:text-yellow-300 duraction-500">
                        {description}
                    </h6>
                    <p className="text-xs my-3">{about}</p>
                    <Stacks stacks={stacks} />
                </a>
            </div>
        </Slide>
    );
};
