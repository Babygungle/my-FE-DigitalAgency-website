import { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex justify-between items-center space-x-8 px-6">
      <nav class="bg-[#ECF7FB] font-sans justify-between border-gray-200 px-2 py-12">
        <a href="/">
          <span class="text-3xl text-[#404C99] font-bold ml-6">Agency</span>
        </a>
        <nav>
          <ul className="DESKTOP-MENU hidden space-x-5 lg:flex text-xl text-[#183B56] absolute left-56 px-16 top-14">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </nav>
      </nav>
      <div>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 max-lg:ml-[100px] max-sm:pl-[-10px]"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-8 rounded-md bg-[#183B56]"></span>
            <span className="block h-1 w-8  rounded-md bg-[#183B56]"></span>
            <span className="block h-1 w-8  rounded-md bg-[#183B56]"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-7 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] font-sm text-lg">
              <li className=" border-gray-400 my-8">
                <a href="/about">About</a>
              </li>
              <li className=" border-gray-400 my-8">
                <a href="/service">Service</a>
              </li>
              <li className=" border-gray-400 my-8">
                <a href="/blog">Blog</a>
              </li>
              <li className=" border-gray-400 my-8">
                <a href="/contact">Contact</a>
              </li>
              <li className=" border-gray-400 my-8 ">
                <a href="/pricing">Pricing</a>
              </li>
              <button
                className="my-8 lg:hidden text-blue-950 hover:bg-gray-50 focus:ring-4 focus:ring-blue-950 
                font-sm rounded-lg px-4 py-3 lg:py-4 mr-0 border-[1.8px] border-blue-950"
              >
                <a href="#">Log in</a>
              </button>
            </ul>
          </div>
        </section>
        <button
          className="max-lg:hidden text-blue-950 hover:bg-gray-50 focus:ring-4 focus:ring-blue-950
                font-medium rounded-lg text-sm ml-[-180px] mt-[-17px] absolute max-xl:ml-[-150px] max-lg:ml-[-130px] max-lg:px-8 max-lg:mt-[-40px] max-md:ml-[250px] max-md:mt-[-40px] max-md:px-3 px-8 py-3 max-lg:py-4 border-[1.8px] border-blue-950"
        >
          <a href="#">Log in</a>
        </button>
      </div>
    </div>
  );
}
