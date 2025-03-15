"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  Search,
  Home,
  FileText,
  Trash2,
  Folder,
  Trash,
  Plus,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [showCalendly, setShowCalendly] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.keyCode === 27) {
        setShowCalendly(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    // If modal is open, prevent background scrolling
    if (showCalendly) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up event listener on component unmount
    return () => {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [showCalendly]);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center p-2 md:p-4">
      <div className="bg-gray-950 border border-gray-800 rounded-xl w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-3 md:p-4 border-b border-gray-800">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <FileText className="text-black w-5 h-5" />
              </div>
              <span className="text-white font-bold text-lg">1SecondCopy</span>
            </div>
            <button
              className="sm:hidden text-gray-400 p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-3 sm:mt-0 w-full sm:w-auto">
            <button className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap font-semibold">
              Brief
            </button>
            <div className="relative flex-1 w-full sm:w-auto sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
            </div>
            {/* Avatar */}
            <div className="flex -space-x-2  sm:flex">
              <div className="w-8 h-8 rounded-full border-2 border-gray-950">
                <img
                  src="/Avatar1.jpg"
                  alt="Avatar1"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-950">
                <img
                  src="/Avatar3.jpg"
                  alt="Avatar3"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-950">
                <img
                  src="/Avatar2.jpg"
                  alt="Avatar2"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-950">
                <img
                  src="/Avatar4.jpg"
                  alt="Avatar4"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <button
              className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap hover:bg-gray-700 transition-colors"
              onClick={openCalendly}
            >
              <Plus className="w-4 h-4" />
              Book a call
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row mt-4">
          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-64 border-r border-gray-800 p-4 space-y-1`}
          >
            <button className="flex items-center gap-3 text-white bg-gray-800 rounded-md p-3 w-full">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            <button className="flex items-center gap-3 text-gray-400 hover:bg-gray-800 rounded-md p-3 w-full">
              <FileText className="w-5 h-5" />
              <span>Create Request</span>
            </button>

            <button className="flex items-center gap-3 text-gray-400 hover:bg-gray-800 rounded-md p-3 w-full">
              <Trash2 className="w-5 h-5" />
              <span>Trash</span>
            </button>

            <div className="pt-8">
              <button
                className="flex items-center justify-center gap-2 text-white bg-gray-800 hover:bg-gray-700 rounded-md p-3 w-full transition-colors"
                onClick={openCalendly}
              >
                <Plus className="w-4 h-4" />
                <span>Book a call</span>
              </button>
            </div>
          </div>

          {/* Gallery - Using Flexbox */}
          <div className="flex-1 p-1">
            <div className="flex flex-col sm:flex-row flex-wrap">
              {/* Left Column */}
              <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3 pl-1 pr-1">
                <div className="rounded-lg mx-2 overflow-hidden h-40 mb-1">
                  <img
                    src="/shoe.jpg"
                    alt="Athletic shoes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg mx-2 overflow-hidden h-[420px] mb-1 mt-3">
                  <img
                    src="/headphone.jpg"
                    alt="Person with headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3 pl-1 pr-1">
                <div className="rounded-lg mx-2 overflow-hidden h-56 mb-1">
                  <img
                    src="/car-door.jpg"
                    alt="Car door"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg mx-2 overflow-hidden h-[350px] mb-1 mt-4">
                  <img
                    src="/sunglass.jpg"
                    alt="Woman with sunglasses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3 pl-1 pr-1">
                <div className="rounded-lg mx-2 overflow-hidden h-[280px] mb-1">
                  <img
                    src="/portrait.jpg"
                    alt="Portrait with blue lighting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg mx-2 overflow-hidden h-40 mb-1 mt-3">
                  <img
                    src="/skate.jpg"
                    alt="Person with skateboard"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-lg mx-2 overflow-hidden h-32 mb-1 mt-3">
                  <img
                    src="/watch.jpg"
                    alt="Clock or watch"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Actions */}
          <div className="hidden md:flex w-16 border-l border-gray-800 flex-col items-center py-8 gap-8">
            <button className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-3 bg-transparent rounded-full text-gray-400 hover:text-white">
              <Folder className="w-5 h-5" />
            </button>
            <button className="p-3 bg-transparent rounded-full text-gray-400 hover:text-white">
              <Trash className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl relative h-full">
            <button
              className="absolute right-4 top-4 text-gray-800 hover:text-gray-600 z-10"
              onClick={() => setShowCalendly(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <iframe
              src="https://calendly.com/showoleolabode-6/30min" // Replace with your actual Calendly link
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a call"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
