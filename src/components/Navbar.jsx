import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LU-Logo-white.png";
import SideIcon from "../assets/Icon.png";

// import { ModeToggle } from "../../ModeToggle";
//import { righteous, outfit, inter, k2d } from "../../fonts/font.js";

const navLinks = [
  { label: "Programs", href: "/all-programs" },
  { label: "Job Assistance", href: "/job-assistance" },
  { label: "Meetups & Workshops", href: "/meetups-workshops" },
  { label: "Tech Skills", href: "/tech-skills" },
  { label: "Soft Skills", href: "/soft-skills" },
  { label: "Social Events", href: "/social-events" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden md:flex py-2 w-full sticky z-30 top-0 left-0 right-0 bg-white dark:bg-neutral-900 ${
        isScrolled ? "border-b border-gray-300 shadow-sm dark:border-white" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        <div id="logo" className="flex items-center justify-center gap-4">
          <div>
            <img
              className="h-10 dark:hidden"
              src={SideIcon}
              alt="LU-Img"
              width={40}
              height={40}
            />
            <img
              className="h-10 hidden dark:flex"
              src={Logo}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div>
            <h1 className={`text-4xl text-white `}>lu</h1>
          </div>
        </div>
        <div id="nav-menu" className="flex">
          <ul
            className={`flex w-full gap-4 border border-black dark:border-white dark:text-white rounded-full py-3 px-5 shadow-md cursor-pointer `}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-orange-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="button" className="flex items-center justify-center gap-5">
          <button
            className={`px-5 py-3 cursor-pointer border border-black dark:border-white shadow-md rounded-full `}
          >
            <Link href="/login" className=" text-white hover:text-orange-500">
              Join Now!
            </Link>
          </button>
          <span className="">
            <svg
              className="flex w-full "
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H33M1 10.8419H33M1 20.6838H33"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
