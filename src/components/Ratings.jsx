const programData = [
    {
        imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
        imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    // Add more program objects here
];

const Ratings = () => {
    return (
        <div className="flex flex-col px-5 z-20 w-full py-8 md:py-10 lg:py-12 gap-5 lg:gap-7 xl:gap-10 max-w-7xl mx-auto">
            <div className={`flex items-center justify-center `}>
                <h1 className=" py-12 text-5xl md:text-6xl font-bold text-center leading-8 text-white">
                    4.6/5 <span className="text-2xl md:text-3xl">Rating on</span>
                </h1>
                <div className="pl-4 md:mt-10">
                    <img
                        className=""
                        src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className="flex w-full overflow-x-scroll md:overflow-x-hidden pb-3 card-scroll md:items-center md:justify-center">
                <div className="flex w-auto gap-3 md:gap-10 text-white">
                    {programData.map((program, index) => (
                        <div
                            key={index}
                            className="flex flex-col text-white p-3 divide-brand-red max-w-xs md:max-w-sm w-80 md:w-96 bg-white dark:bg-neutral-900 shadow-lg border border-black dark:border-white rounded-lg"
                        >
                            <div className="flex w-full">
                                <div className="flex items-center justify-center w-full gap-4 text-white">
                                    <img
                                        className="h-[90px] rounded-full w-1/4 object-cover"
                                        src={program.imageUrl}
                                        alt="Certificate"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="w-3/4">
                                        <h1 className="text-lg text-white">Raj Sharma</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col py-5 px-5 items-center ">
                                <div id="heading">
                                    <h1 className="py-3 text-white">{program.title}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Button /> */}
        </div>
    )
}

export default Ratings