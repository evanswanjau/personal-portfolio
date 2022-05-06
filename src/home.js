import React from "react";

const heroSection = () => {
    return (
        <div className="mx-auto h-auto text-center pt-40 mb-10">
            <h1 className="text-3xl">Hi there 👋</h1>
            <h2 className="text-6xl my-5">I'm Evans Wanjau</h2>
            <p className="w-1/2 mx-auto mt-10">
                A passionate Software Engineer focused on designing and
                developing for the internet. I'm currently focused on building
                easy to use applications that solve world related problems one
                line of code at a time.
            </p>

            <p className="w-2/3 mx-auto mt-5 mb-10 font-bold">
                JavaScript . TypeScript . Node Js . React . Express . Mongo DB .
                SQL . Ubuntu . Apache
            </p>

            <div class="grid grid-cols-3 gap-4 flex items-center w-1/4 mx-auto">
                <a href="https://github.com/evanswanjau" target="_blank" rel="noreferrer">
                    <img
                        src="images/github.png"
                        class="w-6 mx-auto"
                        alt="Github"
                    />
                </a>
                <a
                    href="https://stackoverflow.com/users/4812835/evans-wanjau"
                    target="_blank" rel="noreferrer"
                >
                    <img
                        src="images/stack-overflow.png"
                        class="w-6 mx-auto"
                        alt="StackOverflow"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/evanswanjau/"
                    target="_blank" rel="noreferrer"
                >
                    <img
                        src="images/linkedin.png"
                        class="w-6 mx-auto"
                        alt="LinkedIn"
                    />
                </a>
            </div>
        </div>
    );
};

const aboutSection = () => {
    return (
        <div className="container mx-auto text-center pt-10">
            <img
                src="images/evanswanjau.jpg"
                class="w-36 mx-auto rounded-full mb-10"
                alt="Evans Wanjau"
            />
            <h2 className="text-1xl">ABOUT ME</h2>
            <p className="w-2/3 mx-auto m-5">
                I love looking for opportunities and challenges that make me a
                better programmer and a whole-hearted human being. I recently
                gained an interest in Blockchain Security and Risk management
                systems for blockchain networks, so you might find me writing
                about it on{" "}
                <a
                    href="https://medium.com/@evanswanjau"
                    className="underline"
                    target="_blank" rel="noreferrer"
                >
                    medium
                </a>
                .
            </p>
            <p className="mb-10">
                When I'm not pushing pixels, you'll find me cooking, reading or
                listening to the latest JRE episode
            </p>
        </div>
    );
};

const workSection = () => {
    return (
        <div className="container mx-auto text-center pt-10">
            <h2 className="text-1xl mb-5">WORK</h2>
            <div class="grid grid-cols-3 gap-4 mb-10">
                <div class="flex justify-center" style={{ boxShadow: "5px 5px 0px 1px rgba(0,0,0,1)" }}>
                    <div class="border border-black">
                        <div class="p-6">
                            <h5 class="mb-2">
                                WAPIDOC
                            </h5>
                            <p class="text-justify">
                                A platform that connects the physical and
                                digital world by providing easy and efficient
                                access to health care services and products with
                                the push of a button for everyone, everywhere.
                            </p>
                            <p className="mx-auto my-10 font-bold">
                                JavaScript . Node Js . React . Express
                            </p>
                            <a href="https://wapidoc.com" target="_blank" rel="noreferrer">
                                <img
                                    src="images/link.png"
                                    class="w-6 mx-auto"
                                    alt="Visit"
                                    title="Visit"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center" style={{ boxShadow: "5px 5px 0px 1px rgba(0,0,0,1)" }}>
                    <div class="border border-black">
                        <div class="p-6">
                            <h5 class="mb-2">
                                CASPAD
                            </h5>
                            <p class="text-justify">
                                An AI-driven platform that analyses poor/high-quality audio/video data, using moderated
                                engines converts it into clean accurate
                                transcriptions/ captions.
                            </p>
                            <p className="mx-auto my-10 font-bold">
                                Laravel. Bootstrap . SQL . Composer
                            </p>
                            <a href="https://caspad.com" target="_blank" rel="noreferrer">
                                <img
                                    src="images/link.png"
                                    class="w-6 mx-auto"
                                    alt="Visit"
                                    title="Visit"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center" style={{ boxShadow: "5px 5px 0px 1px rgba(0,0,0,1)" }}>
                    <div class="border border-black">
                        <div class="p-6">
                            <h5 class="mb-2">
                                NEMIT AQUA
                            </h5>
                            <p class="text-justify mb-4">
                                Nemit is a company that provides aqua and
                                construction solutions. I collaborated in the
                                development of a water monitoring tool that
                                notified stakeholders when water levels were
                                low.
                            </p>
                            <p className="mx-auto my-10 font-bold">
                                WordPress . NodeJs . MongoDB
                            </p>
                            <a href="https://nemit.co.ke" target="_blank" rel="noreferrer">
                                <img
                                    src="images/link.png"
                                    class="w-6 mx-auto"
                                    alt="Visit"
                                    title="Visit"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const contactSection = () => {
    return (
        <div className="container mx-auto text-center pt-10">
            <h2 className="text-1xl">GET IN TOUCH</h2>
            <p className="w-2/3 mx-auto mt-5 mb-15">
                I’m always looking for new adventures and meeting new people, my
                DM's are always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
            </p>
            <div class="grid grid-cols-4 gap-4 flex items-center w-1/4 mx-auto mt-5 mb-10">
                <a
                    href="https://www.facebook.com/evans.wanjau.5u"
                    target="_blank" rel="noreferrer"
                >
                    <img
                        src="images/facebook.png"
                        class="w-6 mx-auto"
                        alt="Facebook"
                    />
                </a>
                <a href="https://twitter.com/evanswanjau" target="_blank" rel="noreferrer">
                    <img
                        src="images/twitter.png"
                        class="w-6 mx-auto"
                        alt="Twitter"
                    />
                </a>
                <a href="https://instagram.com/evanswanjau" target="_blank" rel="noreferrer">
                    <img
                        src="images/instagram.png"
                        class="w-6 mx-auto"
                        alt="Instagram"
                    />
                </a>
                <a href="https://medium.com/@evanswanjau" target="_blank" rel="noreferrer">
                    <img
                        src="images/medium.png"
                        class="w-6 mx-auto"
                        alt="Medium"
                    />
                </a>
            </div>
        </div>
    );
};

const footerSection = () => {
    return (
        <div className="container mx-auto text-center pt-10">
            <p>Designed & Built by Evans Wanjau</p>
            <p className="w-2/3 mx-auto mt-1 mb-10 font-bold">
                React . Tailwind CSS
            </p>
        </div>
    );
};

const divider = () => (
    <div className = "h-32 border-r w-2 mx-auto border-black"></div>
);

const Home = () => {
    return (
        <div className="font-serif">
            {heroSection()}
            {divider()}
            {aboutSection()}
            {divider()}
            {workSection()}
            {divider()}
            {contactSection()}
            {footerSection()}
        </div>
    );
};

export default Home;
