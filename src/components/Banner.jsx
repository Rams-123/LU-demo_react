const benefits = [
  "🌟Flexible & Convenient",
  "🌟Increased Engagement",
  "🌟Personalized & Adaptable",
  "🌟Efficient Mastery",
  "🌟Flexible & Convenient",
  "🌟Increased Engagement",
  "🌟Personalized & Adaptable",
  "🌟Efficient Mastery",
  "🌟Flexible & Convenient",
  "🌟Increased Engagement",
  "🌟Personalized & Adaptable",
  "🌟Efficient Mastery",
];
const Banner = () => {
  return (
    <>
      <div className=" bg-black text-white h-screen flex w-full flex-col bg-[length:100%_auto] bg-circleImg bg-no-repeat md:bg[top_0%_center] ">
        <h1 className="flex w-full max-w-4xl mx-auto text-center text-8xl font-semibold items-center justify-center">
          Rewards for everything you do in your 18-24!!
        </h1>
        <div className="flex w-full">
          <span className="flex w-full justify-center">
            <svg
              className="mx-auto"
              width="323"
              height="54"
              viewBox="0 0 323 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.00303466 31.7967C79.0715 20.5274 252.168 1.78223 311.956 16.9562"
                stroke="url(#paint0_linear_8656_117996)"
                stroke-width="4"
              />
              <path
                d="M9.29046 46.503C89.4249 33.5405 264.153 11.1221 321.989 25.148"
                stroke="url(#paint1_linear_8656_117996)"
                stroke-width="4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8656_117996"
                  x1="3.16645"
                  y1="15.8983"
                  x2="300.355"
                  y2="75.1458"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.49" stop-color="#FF0000" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_8656_117996"
                  x1="14.2976"
                  y1="30.4507"
                  x2="293.198"
                  y2="117.447"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.49" stop-color="#FF0000" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="flex w-full items-center text-center">
          <h3 className=" flex w-full text-center justify-center items-center ">
            WE ARE 10,00,000 STRONG
          </h3>
        </div>
        <div className=" flex w-full items-center text-center">
          <span className=" flex w-full text-center justify-center items-center">
            Be a part of our dynamic community, where we embody <br />
            the spirit of perpetual growth and unity.
          </span>
        </div>
        <div className="bg-black flex flex-col md:flex-row w-full max-w-5xl items-center justify-center gap-10 py-5 mx-auto">
          <div className="">
            <button className="bg-white text-black text-2xl rounded-lg px-10 py-2 cursor-pointer">
              Log in
            </button>
          </div>
          <div>
            <button className="bg-black border border-white text-white text-2xl rounded-lg px-10 py-2 cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
        <div className="overflow-hidden py-8 bg-black">
          <div className="flex space-x-4 animate-marquee">
            {benefits.map((benefit, index) => (
              <span key={index} className="whitespace-nowrap flex items-center">
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className=" bg-black text-white h-screen flex w-full flex-col ">
          <h1 className="flex w-full max-w-4xl mx-auto text-center text-8xl font-semibold items-center justify-center">
            The New way of learning is here!
          </h1>
          <div className="flex w-full max-w-3xl items-center text-center justify-center mx-auto gap-4 py-4">
            <p className="text-md ">
              Experience structured, bite-sized learning tailored for skill
              enhancement <br />
              and employability. Connect with driven individuals, united in our
              mission to ,<br /> innovate and succeed together.
            </p>
          </div>
        </div>
        {/* <div className="flex w-full justify-center items-center border border-green-500"> */}
        {/* <div className=" bg-black border border-red-500 w-full px-16 flex-col md:flex-row justify-center items-center">
          <button className="px-12 rounded-md py-2 bg-white  text-black my-4">Login</button>
          <button className="px-12 rounded-md py-2 bg-black border border-white text-white my-4">Signup</button>
        </div> */}
        {/* <svg
            width="1280"
            height="1300"
            viewBox="0 0 1728 1800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_9016_52487)">
              <circle cx="864" cy="896" r="739" fill="black" />
            </g>
            <defs>
              <filter
                id="filter0_d_9016_52487"
                x="-36"
                y="0"
                width="1800"
                height="1800"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="80.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.644948 0 0 0 0 0.0988922 0 0 0 0 0.313414 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_9016_52487"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_9016_52487"
                  result="shape"
                />
              </filter>
            </defs>
          </svg> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Banner;
