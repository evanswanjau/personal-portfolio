import { Slide } from "react-reveal";

export const ContactSection = () => {
    return (
        <div className="flex justify-center items-center py-16">
            <Slide bottom cascade>
                <div className="text-center">
                    <h1 className="text-sm text-yellow-300 font-overpass">
                        Contact
                    </h1>
                    <h2 className="text-2xl md:text-4xl my-4 font-extrabold text-zinc-300">
                        Get in touch
                    </h2>
                    <p className="text-sm px-5 pt-5 pb-10 md:w-2/4 mx-auto">
                        I’m always looking for new adventures and meeting new
                        people, my inbox is always open. Whether you have a
                        question or just want to say Hi, I’ll try my best to get
                        back to you!
                    </p>
                    <button
                        type="button"
                        className="text-yellow-300 hover:text-zinc-900 border border-yellow-300 hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-yellow-600 dark:text-yellow-600 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
                    >
                        <a href="mailto:evanswanjau@gmail.com">
                            Send me an email
                        </a>
                    </button>
                </div>
            </Slide>
        </div>
    );
};
