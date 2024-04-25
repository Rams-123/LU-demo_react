

const JobAssistance = () => {
    return (
        <div className="w-full flex flex-col py-10 max-w-7xl mx-auto border border-white rounded-lg gap-4 mb-10">
            <div className="flex w-full justify-around gap-10">
                <div className="flex w-fit   ">
                    <h1 className="px-4 flex text-7xl font-bold w-full text-white">Job Assistance</h1>
                </div>
                <div className="flex w-fit gap-6">
                    <button className="px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 px-3 py-2 rounded-full bg-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className=""> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 px-3 py-2 rounded-full bg-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                </div>
            </div>

            <div className="flex w-fit overflow-auto text-white">
                <p className="hidden lg:flex w-fit text-center px-5">Experience structured, bite-sized learning tailored for skill enhancement and employability. Connect with driven individuals, united in our mission to innovate and succeed together.</p>
                <p className="flex lg:hidden px-5 py-3">Experience structured, bite-sized <br />learning tailored for skill </p>
            </div>

            {/* Img Container*/}
            <div className="flex w-full overflow-auto pt-4">
                <div className=" flex gap-10 rounded-md w-fit mx-auto border-white">
                    <div className="flex w-80 border border-white rounded-md gap-3 justify-between flex-col pb-3">
                        <div className="flex w-full">
                            <img src="https://letsupgrade-ibran.vercel.app/_next/image?url=%2Fassistance.png&w=384&q=75" className="" alt="" />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="px-2 text-white text-xl">HOW TO CRACK YOUR FIRST ONE!</h1>
                            <h2 className="px-2 text-white">AI Consultant</h2>
                        </div>
                        <ul className="grid grid-cols-3 w-full gap-4 px-4">
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> 2 April</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white">1:30 pm</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> free</sapn>
                            </li>
                        </ul>
                        <button className="border border-white w-fit mx-auto rounded-md pb-3 px-3 py-2  text-white">
                            START LEARNING</button>
                    </div>
                    <div className="flex w-80 border border-white rounded-md gap-3 justify-between flex-col pb-3">
                        <div className="flex w-full">
                            <img src="https://letsupgrade-ibran.vercel.app/_next/image?url=%2Fassistance.png&w=384&q=75" className="" alt="" />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="px-2 text-white text-xl">HOW TO CRACK YOUR FIRST ONE!</h1>
                            <h2 className="px-2 text-white">AI Consultant</h2>
                        </div>
                        <ul className="grid grid-cols-3 w-full gap-4 px-3">
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> 2 April</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white">1:30 pm</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> free</sapn>
                            </li>
                        </ul>
                        <button className="border border-white w-fit mx-auto rounded-md pb-3 px-3 py-2  text-white">
                            START LEARNING</button>
                    </div>

                    <div className="flex w-80 border border-white rounded-md gap-3  justify-between flex-col pb-3">
                        <div className="flex w-full">
                            <img src="https://letsupgrade-ibran.vercel.app/_next/image?url=%2Fassistance.png&w=384&q=75" className="" alt="" />
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <h1 className="px-2 text-white text-xl">HOW TO CRACK YOUR FIRST ONE!</h1>
                            <h2 className="px-2 text-white">AI Consultant</h2>
                        </div>
                        <ul className="grid grid-cols-3 w-full gap-4 pl-2">
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> 2 April</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white">1:30 pm</sapn>
                            </li>
                            <li className="w-full flex gap-2">
                                <span className="text-white flex w-fit" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <sapn className="flex w-fit text-white"> free</sapn>
                            </li>
                        </ul>
                        <button className="border border-white w-fit mx-auto rounded-md pb-3 px-3 py-2  text-white">
                            START LEARNING</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobAssistance