import { Slide, Fade } from "react-reveal";
import { Link } from "react-scroll";

export const HeroSection = () => {
    return (
        <div className="flex items-center min-h-screen overflow-hidden py-5">
            <div className="text-left px-5 md:px-10 md:w-3/5">
                <Fade bottom>
                    <h1 className="text-sm text-yellow-300 font-overpass">
                        Hi there! 👋
                    </h1>
                </Fade>
                <Slide bottom>
                    <h2 className="text-2xl md:text-6xl my-4 font-extrabold text-zinc-300">
                        I'm Evans Wanjau
                    </h2>
                    <h2 className="text-2xl md:text-6xl my-4 font-extrabold text-zinc-400">
                        Software Engineer
                    </h2>

                    <p className="text-justify md:text-left text-sm my-4 leading-relaxed">
                        I'm a passionate programmer with 6 years of professional
                        experience, designing and building for the web. I'm
                        currently focused on building applications that solve
                        real-world problems one line of code at a time.
                    </p>
                </Slide>
                <Fade bottom>
                    <button
                        type="button"
                        className="button my-5 text-yellow-300 hover:text-zinc-900 border border-yellow-300 hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-600 dark:text-yellow-600 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
                    >
                        <Link to="work" spy={true} smooth={true}>
                            Checkout my work
                        </Link>
                    </button>
                </Fade>
            </div>
            <div className="flex w-2/5 h-screen invisible md:visible">
                <Fade right>
                    <img
                        src="images/evans_dev.png"
                        className="h-screen"
                        alt="Evans Wanjau"
                    />
                </Fade>
            </div>
        </div>
    );
};
