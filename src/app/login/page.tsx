/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

function Login() {
  return (
    <div id="__nuxt">
      <div id="__layout">
        <div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen w-full font-display tracking-tight">
            <div className="absolute left-10 top-10">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Login Form */}
            <div className="justify-center items-center flex h-full">
              <div className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto bg-white">
                <form data-ms-form="login">
                  <h2 className="text-3xl text-grey-800 font-bold">
                    Welcome back
                  </h2>

                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-grey-800 text-sm font-semibold"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      data-ms-member="email"
                      className="border w-full px-4 py-2 rounded-md transition duration-150 focus:ring-2 focus:ring-grey-700 focus:outline-none"
                      type="text"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-grey-800 text-sm font-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      data-ms-member="password"
                      className="border w-full px-4 py-2 rounded-md transition duration-150 focus:ring-2 focus:ring-grey-700 focus:outline-none"
                    />
                  </div>

                  <div className="flex w-full justify-between items-center mt-4 text-sm text-grey-800 tracking-tight">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="transform scale-110 focus:outline-none"
                      />
                      <span> Remember for 30 days</span>
                    </label>
                    <a href="#/ms/password-reset">Forgot password</a>
                  </div>

                  <button className="justify-center z-10 flex items-center px-3 space-x-2 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] py-3 mt-5 w-full font-medium">
                    <a href="/">
                      <span>Sign in</span>
                    </a>
                  </button>
                </form>

                <section className="w-full pt-4 text-sm text-grey-700 text-center">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                  >
                    Sign up risk-free
                  </a>
                </section>
              </div>
            </div>

            {/* Side Image */}
            <div className="w-full h-full overflow-hidden hidden md:block">
              <img
                src="https://i.imgur.com/yEV3n4F.jpg"
                className="w-full h-full object-cover"
                alt="Login Side Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
