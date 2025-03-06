/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import ModalForm from "@/components/ModalForm";
import { useEffect, useState } from "react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="__className_f70e54 scroll-smooth bg-[#111827] w-full overflow-x-hidden">
      {/* header and hero  */}
      <section className=" pb-24 lg:mx-8">
        {/* header */}
        <section>
          <nav className="relative">
            <div className="container mx-auto px-4 font-display">
              <div className="relative flex h-24 items-center">
                <a
                  className="flex gap-2 items-center text-white text-xl font-bold"
                  href="/"
                >
                  <img
                    className="h-9 rounded-lg ring-3 ring-white mr-2"
                    src="/1secondcopy_icon.png"
                    alt=""
                  />
                  <p className="font-bold text-[20px] leading-[30px]">
                    1SecondCopy
                  </p>
                </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden navbar-burger flex items-center justify-center h-10 w-10 ml-auto border border-[#1F2937] bg-[#1F2937] bg-opacity-30 hover:bg-[#1F2937] rounded-lg"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 19H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="hidden lg:flex ml-auto items-center">
                  <a
                    className="inline-block text-white hover:text-emerald-200 mr-10 font-normal leading-[24px] text-[16px]"
                    href="/#how-it-works"
                  >
                    How it works
                  </a>
                  <a
                    className="inline-block text-white hover:text-emerald-200 mr-10 font-normal leading-[24px] text-[16px]"
                    href="/#pricing"
                  >
                    Pricing
                  </a>
                  <a
                    className="inline-block text-white hover:text-emerald-200 mr-10 font-normal leading-[24px] text-[16px]"
                    href="/blog"
                  >
                    Blog
                  </a>
                  <a
                    className="inline-block text-white hover:text-emerald-200"
                    href="/contact"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="hidden lg:block ml-12">
                  <a
                    className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center text-sm text-white font-semibold border border-gray-800 rounded-lg"
                    href="https://app.1secondcopy.com/login/"
                  >
                    Login
                  </a>
                  <div className="group inline-block justify-center p-1 text-center text-sm text-white font-semibold rounded-lg">
                    <div className="inline-flex items-stretch h-10 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                      <div className="bg-[#D95D39] flex items-center justify-center rounded-lg">
                        <ModalForm formUrl="https://tally.so/r/mRkxMp" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-transparent backdrop-blur-none bg-opacity-50 z-40"
                onClick={closeMenu}
              ></div>
            )}
            <div
              className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/3 bg-[#111827] text-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between mt-5">
                
                <a
                  className="flex gap-2 items-center text-white text-xl font-bold"
                  href="/"
                >
                  <img
                    className="h-9 rounded-lg ring-3 ring-white mr-2"
                    src="/1secondcopy_icon.png"
                    alt=""
                  />
                  <p className="font-bold text-[20px] leading-[30px]">
                    1SecondCopy
                  </p>
                </a>
                <button
                onClick={() => setIsOpen(false)}
                className=" top-4 right-4 text-white hover:text-gray-300  mr-4"
              >
                ✕
              </button>
              </div>
              
              
              <nav className="flex flex-col mt-24 space-y-4 ml-3">
                <a
                  className="text-[#bfb691] text-sm hover:text-white mb-10"
                  href="/#how-it-works"
                >
                  How it works
                </a>
                <a
                  className="text-[#bfb691] text-sm hover:text-white mb-10"
                  href="/#pricing"
                >
                  Pricing
                </a>
                <a
                  className="text-[#bfb691] text-sm hover:text-white mb-10"
                  href="/blog"
                >
                  Blog
                </a>
                <a
                  className="text-[#bfb691] text-sm hover:text-white mb-10"
                  href="/contact"
                >
                  Contact Sales
                </a>
                <a
                  className="text-[#bfb691] text-sm hover:text-white mb-10"
                  href="https://app.1secondcopy.com/login/"
                >
                  Login
                </a>

                <div className="mt-16 xs:flex-shrink-0 group relative flex xs:inline-flex w-34 xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 bg-[#D95D39] rounded-lg transition-all duration-300 focus:outline-none">
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-3 ring-[#ee7220] animate-pulse group-hover:ring-0 transition duration-300" />
                  <div className="absolute inset-0 w-full h-full rounded-lg border border-black pointer-events-none" />
                  <ModalForm formUrl="https://tally.so/r/mRkxMp" />
                </div>
              </nav>
            </div>
          </nav>
        </section>
        {/* hero */}
        <div className="relative pt-12 md:pt-24 mt-2">
          <div className="container px-4 mx-auto">
            <div className="relative max-w-lg md:max-w-3xl mx-auto text-center">
              <h1 className="tracking-tight text-4xl xs:text-4xl md:text-5xl lg:text-7xl lg:leading-21 font-bold text-white mb-6">
                <span className="leading-none">Precision Media Buying:</span>
                <span className="text-[#9CA3AF]">
                  <br />
                  Broader Reach,{" "}
                  <span className="underline">Better Results</span>.
                </span>
              </h1>
              <p className="md:max-w-md lg:max-w-lg mx-auto text-lg text-[#9CA3AF] mb-8">
                We hired the top 1% of Media buyers so you dont have to. Get
                high quality media strategies and plans in just 3 days
              </p>
              <div className="xs:flex md:flex lg:flex justify-center gap-3 max-w-md mx-auto mb-2">
                <input
                  className="w-full h-12 mb-3 xs:mb-0 xs:mr-3 p-3 text-[#9CA3AF] placeholder-gray-500 bg-[#1F2937] outline-none ring ring-transparent focus:ring-[#FF6D00] focus:ring-3 rounded-lg"
                  type="email"
                  placeholder="Your email"
                  id="email"
                />
                <div className="xs:flex-shrink-0 group relative flex xs:inline-flex lg:w-34 md:w-32 sm:w-72 xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 rounded-lg transition-all duration-300 focus:outline-none">
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-3 ring-[#ee7220] animate-pulse group-hover:ring-0 transition duration-300" />
                  <div className="absolute inset-0 w-full h-full rounded-lg border bg-[#D95D39] border-black pointer-events-none" />
                  <ModalForm formUrl="https://tally.so/r/mRkxMp" />
                </div>
              </div>
              {/* <div className="flex-col lg:flex-row items-center justify-center xs:flex-row w-[350px] mx-auto mt-5"> */}
              <div className="flex flex-col md:flex-row items-center justify-center w-[350px] mx-auto mt-5 gap-2">
                <span className="block text-sm text-[#9CA3AF] opacity-50">
                  7-day money-back guarantee
                </span>
                <span className="inline-block my-4 xs:my-0 mx-auto xs:mx-">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3008_28918)">
                      <mask
                        id="mask0_3008_28918"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={12}
                        height={12}
                      >
                        <path d="M12 0H0V12H12V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_3008_28918)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 6L4.57763e-07 0H6H12V6C8.6868 6 6.00078 3.3145 6 0.00143555C5.99922 3.3145 3.31322 6 0 6ZM6 12C6 8.68626 8.68632 6 12 6V12H6ZM6 12C6 8.68626 3.31371 6 0 6V12H6Z"
                          fill="#4B6354"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="block text-sm text-[#9CA3AF] opacity-50">
                  Unlimited revisions
                </span>
              </div>
            </div>
            <img
              className="block mx-auto -mt-12 md:-mt-28 xl:-mt-60"
              src="/1secondcopy_branded_header.png"
              alt={``}
            />
          </div>
        </div>
      </section>
      {/* hero cont */}
      <section className="py-12 md:pb-24">
        <div className="container max-w-sm md:max-w-7xl px-4 mx-auto">
          <div className="text-center mb-10">
            <h5 className="text-[#9CA3AF] text-lg">
              <span>25 years</span>
              <span className="text-white">
                {" "}
                {/* */}work experience on some{/* */}{" "}
              </span>
              <span>of the world's biggest brands</span>
            </h5>
          </div>
          <div className="flex flex-wrap items-center lg:px-13">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10">
              <img
                className="block mx-auto"
                src="https://i.imgur.com/iEnvjzy.png"
                alt={``}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10">
              <img
                className="block mx-auto"
                src="https://i.imgur.com/UGEZb6u.png"
                alt={``}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-7 mb-10">
              <img
                className="block mx-auto"
                src="https://i.imgur.com/vVDdzbs.png"
                alt={``}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10">
              <img
                className="block mx-auto"
                src="https://i.imgur.com/MCsuITk.png"
                alt={``}
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-10">
              <img
                className="block mx-auto"
                src="https://i.imgur.com/ekqQrW7.png"
                alt={``}
              />
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="pb-16" id="how-it-works">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-24">
            <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-gray-800 rounded-full">
              HOW IT WORKS
            </span>
            <h1 className=" tracking-tight leading-[60px] text-4xl sm:text-5xl font-bold text-white">
              Replace expensive in-house teams & agencies with a flat monthly
              fee
            </h1>
          </div>
          <div className="max-w-lg lg:max-w-4xl xl:max-w-6xl mx-auto">
            <div className="px-2 py-10 rounded-xl border border-gray-800">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 lg mb-12 lg:mb-0">
                  <div className="max-w-lg mx-auto">
                    <button className="group flex items-center gap-5 text-left py-6 rounded-xl hover:bg-[#1F2937] px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center text-white text-md font-bold rounded-full bg-[#1F2937] group-hover:bg-gradient-to-t from-teal-500 to-green-500 shadow-lg transition duration-200">
                          1
                        </div>
                      </div>

                      <div className="block">
                        <p className="text-white font-bold leading-6 text-md w-80">
                          No more hiring, managing, or dealing with media buyers
                        </p>
                        <p className="text-[#9CA3AF] text-sm mt-2">
                          We take care of all of the comms &amp; busywork for
                          you.
                        </p>
                      </div>
                    </button>
                    <button className="group flex items-center gap-5 text-left py-6 rounded-xl hover:bg-[#1F2937] px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center text-white text-md font-bold rounded-full bg-[#1F2937] group-hover:bg-gradient-to-t from-teal-500 to-green-500 shadow-lg transition duration-200">
                          2
                        </div>
                      </div>
                      <div className="block">
                        <p className="text-white font-bold text-md">
                          Extraordinarily simple to use
                        </p>
                        <p className="text-[#9CA3AF] text-sm mt-2 w-84">
                          Complete your media brief and we will take care of the
                          rest.
                        </p>
                      </div>
                    </button>
                    <button className="group flex items-center gap-5 text-left py-6 rounded-xl hover:bg-[#1F2937] px-4 border border-transparent w-full hover:border-gray-700 focus:outline-none transition duration-100">
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center text-white text-md font-bold rounded-full bg-[#1F2937] group-hover:bg-gradient-to-t from-teal-500 to-green-500 shadow-lg transition duration-200">
                          3
                        </div>
                      </div>
                      <div className="block">
                        <p className="text-white font-bold text-md">
                          Completely risk free with unlimited revisions
                        </p>
                        <p className="text-[#9CA3AF] text-sm mt-2">
                          Don't love your media plan? We will rewrite it until
                          you do.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <img
                    className="block w-full max-w-sm mx-auto lg:ml-auto"
                    src="/image-right-dark.png"
                    alt={``}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* growth */}
      <section className="relative py-12 md:py-24">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-7/12 px-4 order-last md:order-first">
              <div>
                <img
                  className="block relative z-10"
                  src="/dark-image-left.png"
                  alt={``}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 mb-16 md:mb-0">
              <div className="md:max-w-lg">
                <div className="pb-10 mb-10 border-b border-[#24432d]">
                  <div className="max-w-md mb-10">
                    <h1 className=" tracking-tight text-4xl leading-15 sm:text-5xl font-bold text-white mb-5">
                      Quit time consuming work &amp; get back to growth
                    </h1>
                    <p className="text-[#9CA3AF]">
                      You are an established company, start up or agency. Why
                      waste your time hiring and managing when you could be
                      focusing on growth? That is where we come in
                    </p>
                  </div>
                  <a
                    className="group inline-block justify-center p-1 text-center text-base text-white font-semibold rounded-lg"
                    href="/about"
                  >
                    <div className="inline-flex items-stretch h-12 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                      <div className="flex items-center px-4 bg-[#D95D39] group-hover:bg-opacity-40 rounded-md transition duration-300">
                        <span className="mr-2">Learn more</span>
                        <span className="transform group-hover:translate-x-1 transition duration-300">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 5L12.5 10L7.5 15"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="max-w-md mb-10">
                  <span className="block mb-5">
                    <svg
                      width={13}
                      height={9}
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.18 0.939999L4.32 8.02H0.24L3.18 0.939999H6.18ZM12.06 0.939999L10.2 8.02H6.12L9.03 0.939999H12.06Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="font-medium text-white">
                    Clean, simple, and easy to use. I love it! Tripling volume
                    was a breeze, and quality has never been better.
                  </p>
                </div>
                <div className="xs:flex items-center justify-between">
                  <div className="flex items-center mb-6 xs:mb-0">
                    <img
                      className="block w-10 h-10 rounded-full"
                      src="zak_blake.png"
                      alt={``}
                    />
                    <div className="ml-4">
                      <span className="block text-sm font-semibold text-white mb-1">
                        Zak Blake
                      </span>
                      <span className="block text-xs text-[#9CA3AF]">
                        Former CTO, Scaling With Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0 opacity-80"
          src="/shadow-blur.png"
          alt={``}
        />
      </section>
      {/* pricing */}
      <section className="py-12 md:py-24" id="pricing">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm md:max-w-md lg:max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">
                Affordable bulk pricing
              </h1>
              <p className="text-lg text-[#9CA3AF]">
                Our content scales with your business.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-12 lg:mb-0 md:px-4">
                <div className="p-8 mb-10 bg-transparent border border-gray-700 rounded-xl shadow-sm">
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3.6V14.4C15 14.7314 14.7314 15 14.4 15H3.6C3.26863 15 3 14.7314 3 14.4V3.6C3 3.26863 3.26863 3 3.6 3H14.4C14.7314 3 15 3.26863 15 3.6Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 21H16.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 13.5V16.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 19.5V20.4C21 20.7314 20.7314 21 20.4 21H19.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.5 21H9.6C9.26863 21 9 20.7314 9 20.4V19.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 9H20.4C20.7314 9 21 9.26863 21 9.6V10.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 9H9.6C9.26863 9 9 9.26863 9 9.6V16.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold text-white uppercase">
                      Starter
                    </span>
                  </div>
                  <div className="flex items-end mb-4">
                    <span className="mr-2 text-5xl font-semibold text-white tracking-tighter">
                      $0.09
                    </span>
                    <span className="inline-block pb-2 text-lg text-[#9CA3AF]">
                      /word
                    </span>
                  </div>
                  <span className="block text-[#9CA3AF] mb-8">
                    For individuals or freelancers.
                  </span>
                  <div className="p-4 mb-8 border border-teal-800 rounded-xl">
                    <div className="mb-4">
                      <span className="text-white font-medium">
                        No-risk&nbsp;
                      </span>
                      <span className="font-medium text-[#9CA3AF]">
                        7 day trial.
                      </span>
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Up to 32,000&nbsp;
                      </span>
                      <span className="font-medium text-[#9CA3AF]">words</span>
                    </div>
                  </div>
                  <div
                    className="group flex justify-center w-full h-12 p-1 text-center text-base text-white font-semibold rounded-lg"
                  >
                    <div className="xs:flex-shrink-0 group relative flex xs:inline-flex w-7xl xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 bg-[#D95D39] rounded-lg transition-all duration-300 focus:outline-none">
                      <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-3 ring-[#ee7220] animate-pulse group-hover:ring-0 transition duration-300" />
                      <div className="absolute inset-0 w-full h-full rounded-lg border border-black pointer-events-none" />
                      <ModalForm formUrl="https://tally.so/r/mRkxMp" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex mb-10 items-start">
                    <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-[#1F2937] rounded-full">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          4 business days or less.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mb-12 lg:mb-0 md:px-4">
                <div className="relative p-8 mb-10 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <span className="absolute top-0 right-0 m-8 inline-block px-2.5 leading-relaxed text-sm text-white bg-gray-800 uppercase rounded-full">
                    Popular
                  </span>
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 15H9.6C9.26863 15 9 15.2686 9 15.6V20.4C9 20.7314 9.26863 21 9.6 21H20.4C20.7314 21 21 20.7314 21 20.4V9.6C21 9.26863 20.7314 9 20.4 9H15.6C15.2686 9 15 9.26863 15 9.6V10.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 15H14.4C14.7314 15 15 14.7314 15 14.4V13.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 13.5V14.4C9 14.7314 8.73137 15 8.4 15H3.6C3.26863 15 3 14.7314 3 14.4V3.6C3 3.26863 3.26863 3 3.6 3H14.4C14.7314 3 15 3.26863 15 3.6V8.4C15 8.73137 14.7314 9 14.4 9H13.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 10.5V9.6C9 9.26863 9.26863 9 9.6 9H10.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold uppercase">
                      Bulk
                    </span>
                  </div>
                  <div className="flex items-end mb-4">
                    <span className="mr-2 text-5xl font-semibold tracking-tighter">
                      $0.08
                    </span>
                    <span className="inline-block pb-2 text-lg text-[#9CA3AF]">
                      /word
                    </span>
                  </div>
                  <span className="block text-[#9CA3AF] mb-8">
                    For larger teams &amp; affiliate websites over 32,000 words.
                  </span>
                  <div className="p-4 mb-8 border border-gray-200 rounded-xl">
                    <div className="mb-4">
                      <span className="text-sm font-medium">No-risk&nbsp;</span>
                      <span className="text-sm font-medium text-gray-500">
                        14 day trial.
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">
                        Up to 72,000&nbsp;
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        words.
                      </span>
                    </div>
                  </div>
                  <div className="group relative flex items-center justify-center px-5 h-12 font-bold text-white bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] rounded-lg transition-all duration-300">
                    <div className="xs:flex-shrink-0 group relative flex xs:inline-flex w-34 xs:w-auto items-center justify-center px-5 h-12 font-bold text-gray-300 rounded-lg transition-all duration-300 focus:outline-none">
                      <ModalForm formUrl="https://tally.so/r/mRkxMp" />
                    </div>
                  </div>
                </div>
                <div className="flex mb-10 items-start">
                  <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-[#1F2937] rounded-full">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <p className="text-sm">
                      <span className="font-semibold text-white">
                        3 business days or less.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:px-4">
                <div className="p-8 mb-10 bg-[#1F2937] border border-gray-700 rounded-xl">
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 9H20.4C20.7314 9 21 9.26863 21 9.6V20.4C21 20.7314 20.7314 21 20.4 21H9.6C9.26863 21 9 20.7314 9 20.4V15"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 9V3.6C15 3.26863 14.7314 3 14.4 3H3.6C3.26863 3 3 3.26863 3 3.6V14.4C3 14.7314 3.26863 15 3.6 15H9"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold text-white uppercase">
                      Enterprise
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-5xl font-semibold text-white tracking-tighter">
                      $0.07
                    </span>
                    <span className="inline-block pb-2 text-lg text-[#9CA3AF]">
                      /word &amp; below
                    </span>
                  </div>
                  <span className="block text-[#9CA3AF] mb-8">
                    Contact our sales team for details.
                  </span>
                  <div className="p-4 mb-8 border border-gray-700 rounded-xl">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-white">
                        Unlimited&nbsp;
                      </span>
                      <span className="text-sm font-medium text-[#9CA3AF]">
                        content.
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white">
                        Automated posting &amp;&nbsp;
                      </span>
                      <span className="text-sm font-medium text-[#9CA3AF]">
                        delivery.
                      </span>
                    </div>
                  </div>
                  <a
                    className="flex items-center justify-center w-full h-12 px-4 text-center text-base text-gray-700 hover:text-white font-bold bg-white hover:bg-gray-900 rounded-lg transition duration-200"
                    href="/contact"
                  >
                    Contact Sales
                  </a>
                </div>
                <div className="flex mb-10 items-start">
                  <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-[#1F2937] rounded-full">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="ml-4">
                    <p className="text-sm">
                      <span className="font-semibold text-white">
                        2 business days or less.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm md:max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto mb-20 text-center">
              <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-teal-50 bg-gray-800 rounded-full">
                TESTIMONIALS
              </span>
              <h1 className="tracking-tight text-4xl sm:text-5xl font-bold text-white">
                Companies really love us
              </h1>
            </div>
            <div className="flex flex-wrap lg:px-10">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-6 xs:px-10 pb-14 bg-[#1F2937] rounded-t-xl md:rounded-none md:rounded-tl-xl">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Zak Blake
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        CTO at Scaling With Systems
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white w-xs">
                      "Clean, simple, and easy to use. I love it! Tripling our
                      content volume was a breeze."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-10 pb-14">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Albert Kim
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        CEO at Greenline POS
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      "Working with freelancers was frustrating and inefficient
                      - 1SecondCopy solved that for us."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-6 xs:px-10 pb-14 bg-[#1F2937] md:bg-transparent lg:bg-[#1F2937] rounded-xl md:rounded-none lg:rounded-tr-xl">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Scott Douglas Clary
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        Founder at Success Story Podcast
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      "Their research, quality of copy and ability to turn
                      around complex projects quickly is second to none."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-6 xs:px-10 pb-14 lg:bg-transparent md:bg-[#1F2937] bg-transparent rounded-r-xl lg:rounded-none">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Julian Figueroa
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        Founder of Kinetic Finance
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      "Crypto is a very nuanced subject to write on, but
                      1SecondCopy consistently crushes whatever I throw their
                      way."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-6 xs:px-10 pb-14 bg-[#1F2937] rounded-b-xl md:rounded-r-none md:rounded-bl-xl lg:rounded-b-xl">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Jono Catliff
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        CEO at DJING.ca
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      "Like magic. They just *get* our voice, tone, and company.
                      Email marketing has never been so easy."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="pt-10 px-10 pb-14">
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-700">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        Gurinder Khabra
                      </span>
                      <span className="text-base text-[#9CA3AF]">
                        Founder at Pacific Creative Group
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      "Exceptional and timely. If you're not working with
                      1SecondCopy, you're missing out."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
      <section className="relative pt-12 pb-12 lg:pb-0 md:pt-24 lg:px-14">
        <div className="max-w-sm md:max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full mb-20 lg:mb-0 lg:pb-64">
              <div>
                <span className="inline-flex items-center h-6 mb-6 px-2 text-sm font-medium text-white bg-[#1F2937] rounded-full">
                  FAQ
                </span>
                <h1 className="tracking-tight lg:text-[48px] lg:leading-15 sm:font-semibold sm:leading-12 text-[36px] font-semibold text-white mb-10 lg:w-lg md:w-xl w-sm">
                  Frequently asked questions
                </h1>
                <a
                  className="xs:flex-shrink-0 group relative w-36 xs:w-auto flex xs:inline-flex items-center justify-center h-10 px-2 py-px font-bold text-gray-300 bg-[#D95D39] rounded-lg transition-all duration-300 focus:outline-none"
                  href="/contact"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-3 ring-[#ee7220] animate-pulse group-hover:ring-0 transition duration-300" />
                  <div className="absolute inset-0 w-full h-full rounded-lg border border-black pointer-events-none" />
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3332 7.33333C13.3332 4.38781 10.9454 2 7.99984 2C5.05432 2 2.6665 4.38781 2.6665 7.33333"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.3335 9.77178V9.56155C1.3335 8.64381 1.95809 7.84385 2.84843 7.62126L3.25464 7.51971C3.63333 7.42504 4.00016 7.71145 4.00016 8.10179V11.2315C4.00016 11.6219 3.63333 11.9083 3.25464 11.8136L2.84842 11.7121C1.95809 11.4895 1.3335 10.6895 1.3335 9.77178Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14.6667 9.77178V9.56155C14.6667 8.64381 14.0421 7.84385 13.1517 7.62126L12.7455 7.51971C12.3668 7.42504 12 7.71145 12 8.10179V11.2315C12 11.6219 12.3668 11.9083 12.7455 11.8136L13.1517 11.7121C14.0421 11.4895 14.6667 10.6895 14.6667 9.77178Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.3332 12V12C13.3332 12.9205 12.587 13.6667 11.6665 13.6667H9.6665"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 14.6667H7C6.44772 14.6667 6 14.219 6 13.6667C6 13.1144 6.44772 12.6667 7 12.6667H9C9.55228 12.6667 10 13.1144 10 13.6667C10 14.219 9.55228 14.6667 9 14.6667Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="ml-2">Contact us</span>
                </a>
              </div>
            </div>
            <div className="w-full">
              <div>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-[#1F2937] rounded-xl border-3 border-transparent hover:border-[#FF6D00] ring ring-transparent hover:ring-[#D95D39] focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-white">
                      What is 1SecondCopy?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-[#9CA3AF]">
                      We're a network of handpicked, high-quality writers and
                      editors that work on-demand for your convenience.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-[#D95D39] rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-[#1F2937] rounded-xl border-3 border-transparent hover:border-[#FF6D00] ring ring-transparent hover:ring-yellowGreen-800 focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-white">
                      How does it work?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-[#9CA3AF]">
                      It's easy - just enter a few details about your business,
                      add a title &amp; a couple of keywords, and our
                      world-class writers will whip up a high quality piece in
                      under three business days.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-[#D95D39] rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-[#1F2937] rounded-xl border-3 border-transparent hover:border-[#FF6D00] ring ring-transparent hover:ring-[#D95D39] focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-white">
                      How much does it cost?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-[#9CA3AF]">
                      We charge a simple, flat fee: $0.09/word. You can buy
                      additional words in the app as needed.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-[#D95D39] rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button className="group flex mb-3 items-center justify-between text-left w-full px-6 py-5 bg-[#1F2937] rounded-xl border-3 border-transparent hover:border-[#FF6D00] ring ring-transparent hover:ring-[#D95D39] focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-white">
                      Is there any risk?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-[#9CA3AF]">
                      Not at all! If you're not in love with your content in the
                      first week, let us know and we'll give you a 100% refund.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-[#D95D39] rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button className="group flex items-center justify-between text-left w-full px-6 py-5 bg-[#1F2937] rounded-xl border-3 border-transparent hover:border-[#FF6D00] ring ring-transparent hover:ring-[#D95D39] focus:outline-none">
                  <div className="pr-4">
                    <h6 className="font-semibold text-white">
                      How is the content delivered?
                    </h6>
                    <p className="hidden group-hover:block mt-2 text-sm text-[#9CA3AF]">
                      Orders are delivered via Google Doc link with global
                      sharing access.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex w-7 h-7 items-center justify-center bg-[#D95D39] rounded-full">
                    <svg
                      className="group-hover:hidden"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden group-hover:block"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get started */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="relative pb-16 border-b border-[#2e490d] border-opacity-50 overflow-hidden">
            <img
              className="absolute bottom-0 left-1/2 md:-mb-2 lg:-mb-20 transform -translate-x-1/2 opacity-20"
              src="aurora-assets/cta/line-green-bottom.png"
              alt={``}
            />
            <img
              className="absolute bottom-0 left-1/2 -mb-5 sm:-mb-10 md:-mb-16 lg:-mb-28 transform -translate-x-1/2 opacity-20"
              src="/light-green-bottom.png"
              alt={``}
            />
            <div className="relative max-w-sm md:max-w-xl mx-auto text-center">
              <span className="inline-flex items-center h-6 mb-4 px-2 text-sm font-medium text-white bg-gray-800 rounded-full">
                Get Started
              </span>
              <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-white mb-10">
                Outsource your Media Buying and build your business for growth
              </h1>
              <a
                className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-sm text-gray-300 bg-[#D95D39] rounded-lg transition-all duration-300 w-54 mx-auto"
                href="https://app.1secondcopy.com"
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-3 ring-[#ee7220] animate-pulse group-hover:ring-0 transition duration-300" />
                <div className="absolute inset-0 w-full h-full rounded-lg border border-black pointer-events-none" />
                <span className="mr-2">Start your no-risk trial</span>
                <span className="transform group-hover:translate-x-1 transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="py-12 md:pt-24">
        <div className="mb-12 pb-24 border-b border-gray-800">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16">
                <div>
                  <a
                    className="flex gap-2 items-center text-white text-xl font-bold"
                    href="/"
                  >
                    <img
                      className="h-9 rounded-lg ring-3 ring-white mr-2"
                      src="/1secondcopy_icon.png"
                      alt={``}
                    />
                    <p>1SecondCopy</p>
                  </a>
                  <span className="block text-lg text-[#9CA3AF] max-w-xs mt-6">
                    We hired the top 1% of writers so you don't have to. Get
                    high quality articles &amp; posts in just 3 days.
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 ml-auto px-4">
                <div className="flex justify-between -mx-4 -mb-8">
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                    <h5 className="text-xl font-semibold text-white mb-6">
                      Product
                    </h5>
                    <ul>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/agencies"
                        >
                          Agencies
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/about#services"
                        >
                          Services
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/#pricing"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                    <h5 className="text-xl font-semibold text-white mb-6">
                      Company
                    </h5>
                    <ul>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/about"
                        >
                          About
                        </a>
                      </li>
                      <li className="flex items-center mb-6">
                        <a
                          className="inline-block mr-2 text-lg text-[#9CA3AF] hover:text-white"
                          href="/careers"
                        >
                          <span>Careers</span>
                        </a>
                        <span className="inline-flex h-6 px-2 items-center text-white bg-[#D95D39] rounded-full">
                          <svg
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={4} cy={4} r={3} fill="white" />
                          </svg>
                          <span className="ml-0.5 text-xs text-gray-50">
                            Hiring
                          </span>
                        </span>
                      </li>
                      <li>
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/contact"
                        >
                          Contact Sales
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                    <h5 className="text-xl font-semibold text-white mb-6">
                      Resources
                    </h5>
                    <ul>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/contact"
                        >
                          Support
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          className="inline-block text-lg text-[#9CA3AF] hover:text-white"
                          href="/privacy"
                        >
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="md:flex items-center justify-between">
            <p className="text-[#9CA3AF] mb-10 md:mb-0">
              Made with love ❤️ © 2023 1SecondCopy. All rights reserved.
            </p>
            <div className="flex items-center">
              <a
                className="inline-flex w-10 h-10 p-2 mr-3 text-white hover:text-teal-500 items-center justify-center bg-gray-800 rounded-full transition duration-100"
                href="https://ca.linkedin.com/company/1secondcopy"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="inline-flex w-10 h-10 p-2 mr-3 text-white hover:text-teal-500 items-center justify-center bg-gray-800 rounded-full transition duration-100"
                href="https://instagram.com/1secondcopy"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="inline-flex w-10 h-10 p-2 text-white hover:text-teal-500 items-center justify-center bg-gray-800 rounded-full transition duration-100"
                href="https://www.facebook.com/1secondcopy/"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
