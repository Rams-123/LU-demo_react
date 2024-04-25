

const Certificates = () => {
    return (
        <div> <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-7xl mx-auto px-5 py-5 gap-10">
            <div className=" flex flex-col w-full gap-6">
                <div className="">
                    <img
                        className="rounded-xl border border-black"
                        src="https://lucdn.letsupgrade.net/assets/certificate_new_c9e8e50138.webp"
                        alt=""
                        width={522}
                        height={369}
                    />
                </div>
            </div>
            <div className=" flex w-full">
                <div className="flex flex-col w-full items-center justify-end gap-5">
                    <div id="Heading" className={`flex w-full`}>
                        <h1 className="text-4xl md:text-6xl text-center ">
                            Get Certified in Postman api
                        </h1>
                    </div>

                    <div id="Details" className="order-1 flex w-full md:order-2 max-w-md">
                        <p
                            className={`flex flex-col gap-4 py-4 text-center tracking-widest`}
                        >
                            Certificate in collaboration with Google Developer Groups Mumbai
                            (GDG MAD) & NSDC
                        </p>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Certificates