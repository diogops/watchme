const Forms = () => {
    return (
        <div>
            <section className="bg-gray-100 mt-10">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally
                                independent from manufacturer and other group control gives you
                                confidence that we will only recommend what is right for you.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    0151 475 4450
                                </a>

                                <address className="mt-2 not-italic">
                                    282 Kevin Brook, Imogeneborough, CA 58517
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only" for="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input className="sr-only" id="option1" type="radio" tabindex="-1" />
                                        <label
                                            for="option1"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 1 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input className="sr-only" id="option2" type="radio" tabindex="-1" />
                                        <label
                                            for="option2"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 2 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input className="sr-only" id="option3" type="radio" tabindex="-1" />
                                        <label
                                            for="option3"
                                            className="block w-full rounded-lg border border-gray-200 p-3"
                                            tabindex="0"
                                        >
                                            <span className="text-sm font-medium"> Option 3 </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" for="message">Message</label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    >
                                        <span className="font-medium"> Send Enquiry </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-10" />

            <div className="flex items-center justify-center p-12 ">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form
                        className="py-6 px-9"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >
                        <div className="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Send files to this email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    for="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span
                                            className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                        >
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>

                            <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                        banner-design.png
                                    </span>
                                    <button className="text-[#07074D]">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
                                <div className="flex items-center justify-between">
                                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                        banner-design.png
                                    </span>
                                    <button className="text-[#07074D]">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                                    <div
                                        className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Forms;