import Image from "next/image";

const ChatCard = () => {
    return (
        <>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-5">
                <div className="shrink-0">
                    <Image className="h-12 w-12" src="/chat.png" alt="ChitChat Logo" width={100} height={100} />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <div className="mb-12"></div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/building.jpg" alt="Modern building architecture" width={100} height={100} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>

            <div className="mb-12"></div>

            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">
                    <div className="px-6 py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div
                                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                        style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)" }}
                                    >
                                        <h2 className="text-3xl font-bold mb-12">
                                            Trusted by the best companies <br />
                                            <span className="">around the world</span>
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-x-6">
                                            <div className="mb-12">
                                                <Image
                                                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png"
                                                    className="grayscale px-6"
                                                    alt="Nasa - logo"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>

                                            <div className="mb-12">
                                                <Image
                                                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo5-1.png"
                                                    className="grayscale px-6"
                                                    alt="Amazon - logo"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>

                                            <div className="mb-12 md:mb-0">
                                                <Image
                                                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo3-1.png"
                                                    className="grayscale px-6"
                                                    alt="Nike - logo"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>

                                            <div className="">
                                                <Image
                                                    src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo4-1.png"
                                                    className="grayscale px-6"
                                                    alt="Ikea - logo"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <Image
                                        src="https://mdbootstrap.com/img/new/textures/full/166.jpg"
                                        className="w-full rounded-lg shadow-lg"
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default ChatCard;