import work from "../../data/work.json";
import { Work } from "../../containers/work";

export const WorkSection = () => {
    return (
        <div id="work" className="flex flex-col text-center py-10">
            <h1 className="text-sm text-yellow-300" font-overpass>
                Work
            </h1>
            <h2 className="text-2xl md:text-4xl px-4 my-4 font-extrabold text-zinc-300">
                Projects I'm involved in
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-1 p-2 md:p-5">
                {work.map((data) => {
                    return <Work key={data.name} data={data} />;
                })}
            </div>
        </div>
    );
};
