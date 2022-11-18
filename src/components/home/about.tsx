import { Slide, Fade } from "react-reveal";

export const AboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center min-h-screen gap-5 text-center py-10 px-5 md:px-10 ">
            <div className="flex w-full md:w-2/5 justify-center">
                <Fade left>
                    <img
                        src="images/evanswanjau.jpg"
                        className="w-full md:w-4/5 rounded-lg shadow-lg"
                        alt="Evans Wanjau"
                    />
                </Fade>
            </div>
            <div className="w-full py-5 md:w-3/5 text-center md:text-left">
                <Slide bottom>
                    <h1 className="text-sm text-yellow-300 font-overpass">
                        About
                    </h1>
                    <h2 className="text-2xl md:text-4xl my-4 font-extrabold text-zinc-300">
                        Why programming?
                    </h2>
                    <p className="text-justify md:text-left text-sm my-5 leading-relaxed">
                        My interest for programming started way back when I was
                        introduced to visual basic 6.0, and used it to build a
                        trivia application which I presented to the science
                        congress in 2012, my last year in highschool. Fast
                        forward to today, I have had the pleasure of working
                        with people from different parts of the world solving
                        problems through software.
                    </p>
                    <p className="text-justify md:text-left text-sm my-5 leading-relaxed">
                        I recently gained interest in Machine Learning and
                        Neural Networks, so you might find me writing about it
                        on{" "}
                        <a
                            href="https://medium.com/@evanswanjau"
                            className="underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            medium
                        </a>
                        .{" "}
                    </p>
                    <p className="text-justify md:text-left text-sm my-5 leading-relaxed">
                        When I'm not pushing pixels, you'll find me playing
                        chess, reading a good book or playing basketball.
                    </p>
                </Slide>
            </div>
        </div>
    );
};
