import { Link } from "react-router-dom";

const programData = [
    {
        imageUrl:
            "https://lucdn.letsupgrade.net/assets/postman_6533a7d87a168_8358f9341c.webp",
        title: "Postman API Fundamentals",
        tags: ["essential", "beginner"],
        rating: 4,
        time: "6:30 pm",
        date: "25th Mar",
        enrolledStudents: "17,888+",
        applyUrl: "./programs",
    },
    {
        imageUrl:
            "https://lucdn.letsupgrade.net/assets/postman_6533a7d87a168_8358f9341c.webp",
        title: "Postman API Fundamentals",
        tags: ["essential", "beginner"],
        rating: 4,
        time: "6:30 pm",
        date: "25th Mar",
        enrolledStudents: "17,888+",
        applyUrl: "./programs",
    },
    {
        imageUrl:
            "https://lucdn.letsupgrade.net/assets/postman_6533a7d87a168_8358f9341c.webp",
        title: "Postman API Fundamentals",
        tags: ["essential", "beginner"],
        rating: 4,
        time: "6:30 pm",
        date: "25th Mar",
        enrolledStudents: "17,888+",
        applyUrl: "./programs",
    },
];

const Programs = () => {
    return (
        <div className=" flex flex-col z-20 w-full py-8 md:py-10 lg:py-12 gap-5 lg:gap-7 xl:gap-10 max-w-7xl mx-auto rounded-md ">
            <div className="flex flex-col items-center justify-center">
                <h1 className=" py-12 text-4xl md:text-6xl text-center text-white ">
                    FREE Certificate Courses
                </h1>
            </div>
            <div className="flex w-full overflow-x-scroll md:overflow-x-hidden pb-3 card-scroll md:items-center md:justify-center">
                <div className="flex w-auto gap-3 md:gap-10">
                    {programData.map((program, index) => (
                        <div
                            key={index}
                            className="flex flex-col divide-y divide-brand-red max-w-xs md:max-w-sm w-80 md:w-96 bg-white dark:bg-neutral-900 shadow-lg border border-black dark:border-white rounded-lg"
                        >
                            <div className="flex w-full flex-col">
                                <div className="flex ">
                                    <img
                                        className="rounded-t-lg"
                                        src={program.imageUrl}
                                        alt="Certificate"
                                        width={385}
                                        height={160}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  py-5 px-5 items-center justify-center">
                                <div className="flex w-full items-center justify-between">
                                    <div id="tag" className="space-x-2">
                                        {program.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-black dark:border-white font-medium text-gray-600 dark:text-white ring-1 ring-inset ring-gray-500/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div id="rating" className="flex gap-2">
                                        {Array.from({ length: program.rating }, (_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 54 60"
                                                fill="none"
                                            >
                                                <path
                                                    d="M27.4024 59.1687C30.778 39.262 36.5949 32.876 54.0039 29.8778C54.0039 29.8778 38.9916 26.8949 34.0039 19.3643C29.0161 11.8337 29.6029 7.23716 27.3046 0C25.2508 6.65037 25.5658 14.028 19.9207 20.2934C14.324 26.5051 7.15789 28.0685 0.703125 29.7311C18.3566 33.202 23.9832 39.9368 27.4024 59.1687Z"
                                                    fill="#FFBB00"
                                                ></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    id="heading"
                                    className="flex py-6 items-center justify-center w-full border-b dark:border-b-white"
                                >
                                    <h1 className="flex text-center text-white">{program.title}</h1>
                                </div>
                                <div
                                    id="details"
                                    className="flex w-full py-4 items-center justify-between"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                        <p className="text-xs text-white">{program.time}</p>
                                    </div>
                                    <div className="flex text-white items-center justify-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                            />
                                        </svg>
                                        <p className="text-xs">{program.date}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-xs text-orange-500">
                                            {program.enrolledStudents} Students Enrolled
                                        </p>
                                    </div>
                                </div>
                                <div className="flex border border-black dark:border-white rounded-lg w-full items-center justify-center">
                                    <Link
                                        href={program.applyUrl}
                                        className="px-5 py-3 cursor-pointer text-center text-white "
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className={flex items-center justify-center ${inter.className}}> */}
            <div className="flex items-center justify-center">
                <Link href="/all-programs">
                    <button className="bg-black border border-black dark:bg-white text-white dark:text-black px-12 py-3 cursor-pointer rounded-full">
                        view more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Programs