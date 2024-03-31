import React from "react";
import marketPlacePic from "./pics/marketplace.png";
import StrossleLogo from "./pics/Strossle_logo.png";
import branding from "./pics/branding.jpg";

export default function Blog() {
  return (
    <div className="bg-white max-md:pb-[1000px]">
      <h1 className="text-3xl font-bold pt-[160px] pb-7 text-center">
        Read Our Blog
      </h1>
      <div className="grid grid-cols-3 grid-flow-col max-md:flex max-md:flex-col max-md:mx-8 m-4 h-[478px] gap-10 px-10">
        <div className="rounded-lg px-5 py-5 bg-[#F8FCFD]">
          <img
            src={marketPlacePic}
            class="h-[240px] w-[453px] rounded-lg object-center my-5 max-md:h-auto max-md:w-[280px]"
          ></img>
          <h2 className="font-normal text-sm text-[#5A7184] pb-3"> Design</h2>
          <p class="font-bold text-xl text-[#183B56]">
            How great Content helps drive success in Marketplace
          </p>
          <button class="py-4 font-medium text-sm text-[#404C99] hover:mx-2">
            Read More
            <svg
              class="inline stroke-[#404c99] stroke-1 ml-2"
              width="25"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
        <div className="rounded-lg bg-[#F8FCFD] px-5 py-5">
          <img
            src={StrossleLogo}
            class="h-[240px] w-[453px] rounded-lg object-center my-5"
          ></img>
          <h2 className="font-normal text-sm text-[#5A7184] pb-3">
            Development
          </h2>
          <p class="font-bold text-xl text-[#183B56]">
            Strossle International AB ranked #1 on Deloitte 2018
          </p>
          <button class="py-4 font-medium text-sm text-[#404C99] hover:mx-2">
            Read More
            <svg
              class="inline stroke-[#404c99] stroke-1 ml-2"
              width="25"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
        <div className="rounded-lg bg-[#F8FCFD] px-5 py-5">
          <img
            src={branding}
            class="h-[240px] w-[453px] rounded-lg object-center my-5"
          ></img>
          <h2 className="font-normal text-sm text-[#5A7184] pb-3">Marketing</h2>
          <p class="font-bold text-xl text-[#183B56]">
            What All Marketers Should Know About Brand Safe
          </p>
          <button class="py-4 font-medium text-sm text-[#404C99] hover:mx-2">
            Read More
            <svg
              class="inline stroke-[#404c99] stroke-1 ml-2"
              width="25"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
