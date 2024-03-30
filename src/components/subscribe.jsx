import React from "react";

export default function Subscribe() {
  return (
    <div className="grid grid-cols-1 grid-flow-col max-lg:ml-[-190px] max-lg:w-[1100px] max-md:ml-[-230px] max-md:w-[940px] max-sm:w-[470px] max-sm:px-[10px] max-sm:ml-[10px] max-md:flex max-md:flex-col max-md:mx-5 h-[459px] w-[1110px] gap-10 px-[110px] pl-[290px] pt-[500px] pb-[300px] max-md:pb-[200px]">
      <div className="rounded-2xl px-10 py-10 max-lg:mt-10 max-md:mt-[-300px] bg-[#0BC0EB]">
        <p className="font-bold text-3xl text-center text-white py-5">
          Subscribe Now for<br></br>
          Get Special Features!
        </p>
        <div className="rounded-lg shadow-xl bg-white w-45 max-md:shadow-md mx-[40px] max-sm:mx-[-10px] py-4">
          <form>
            <div className="rounded-lg bg-white w-30 mx-[180px] ml-[10px] py-2">
              <input
                className="ml-[30px] flex text-gray-400"
                type="text"
                id="email"
                name="email"
                value="Enter Your Email"
              ></input>
            </div>
          </form>
          <button class="rounded-lg bg-[#404C99] py-4 px-6 ml-[370px] mt-[-45px] max-lg:ml-[270px] max-md:ml-[225px] max-sm:ml-[250px] max-sm:px-4 font-medium flex text-sm text-white hover:bg-[#404c99c9]">
            Submit
            <svg
              class="inline stroke-white stroke-1 ml-2"
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
