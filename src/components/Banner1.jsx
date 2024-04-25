//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner1 = () => {
    return (
        <div className="hero-container">
            <div
                className={`flex h-auto flex-col items-center justify-center px-5  bg-circleImg bg-no-repeat md:bg[top_0%_center]dark:bg-eclipsedark bg-[length:100%_auto] bg-[top_550px_center] md:bg-[top_250px_center] pb-10 `}
            >
                <div className="flex mt-10 flex-col items-center justify-center ">
                    <h1 className="relative py-10 flex max-w-4xl mx-auto text-4xl md:text-8xl text-center leading-1 text-white">
                        Rewards for everything you do in your 18-24!!
                        <img
                            className="absolute -bottom-1 right-[20%] md:h-12 "
                            src="/hero-line.png"
                            alt=""
                            width={180}
                            height={100}
                        />
                    </h1>
                    <p
                        className={`hidden md:flex text-2xl font-semibold mt-5 `}
                    >
                        WE ARE 10,00,000 STRONG{" "}
                    </p>
                    <p
                        className={`text-base text-center py-5 max-w-2xl leading-9 tracking-widest `}
                    >
                        Be a part of our dynamic community, where we embody the <br />{" "}
                        spirit of perpetual growth and unity.{" "}
                    </p>
                </div>
                <div
                    className={`flex flex-col z-20 md:flex-row items-center justify-center gap-5 py-10 `}
                >
                    <Link href="/login">
                        <button className="bg-black px-12 py-3 cursor-pointer rounded-full text-white text-xl shadow-xl dark:bg-white dark:text-black">
                            Log in
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="border border-black px-12 py-3 cursor-pointer rounded-full text-xl shadow-xl dark:border-white dark:text-white">
                            Sign up
                        </button>
                    </Link>
                </div>
                {/* <Ticker /> */}
                <div className="flex mt-10 flex-col items-center justify-center ">
                    <h1 className="relative py-10 flex max-w-4xl mx-auto text-4xl md:text-8xl text-center leading-1">
                        The New way of learning is here!
                    </h1>
                    <p
                        className={`text-base text-center py-5 max-w-2xl leading-9 tracking-widest `}
                    >
                        Experience structured, bite-sized learning tailored for skill enhancement and employability. Connect with driven individuals, united in our mission to innovate and succeed together.
                    </p>
                </div>
                {/* <ProgramSection />
      <Rating />
      <FloatingButtons /> */}
            </div>
        </div>
    )
}

export default Banner1