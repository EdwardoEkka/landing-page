// pages/index.tsx
"use client";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="px-4 mx-[3%] sm:mx-[5%] md:mx-[7%] lg:mx-[10%]">
      <header className="w-full md:mt-20 mt-10">
        <nav>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-8 items-center flex-row">
              <div className="text-3xl font-serif flex items-center gap-2">
                <img
                  className="w-7 h-10"
                  src="./images/icons/main-icon.png"
                ></img>
                Uifry
              </div>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-black-300 hover:text-white">
                  Home
                </a>
                <a href="#" className="text-black-300 hover:text-white">
                  About
                </a>
                <a href="#" className="text-black-300 hover:text-white">
                  Services
                </a>
                <a href="#" className="text-black-300 hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div className="hidden md:flex bg-black text-white px-8 py-4 rounded-md">
              Download
            </div>

            <div className="md:hidden">
              <button
                className="text-black hover:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`absolute top-0 left-0 w-full bg-gray-100 text-black flex flex-col items-center space-y-4 p-8 transform transition-transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <a href="#" className="text-black" onClick={toggleMenu}>
            Home
          </a>
          <a href="#" className="text-black" onClick={toggleMenu}>
            About
          </a>
          <a href="#" className="text-black" onClick={toggleMenu}>
            Services
          </a>
          <a href="#" className="text-black" onClick={toggleMenu}>
            Contact
          </a>
          <span className="bg-black text-white px-8 py-4 rounded-md">
            Download
          </span>
        </div>
      </header>

      <main className="">
        <div className="flex flex-col md:flex-row mt-10 ">
          <div className="w-full md:w-1/2">
            <div className="">
              <div className="text-4xl font-black">
                Make the best Financial Decisions
              </div>
              <div className="text-base mt-5 md:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium placeat quo earum quis pariatur amet incidunt quasi
                at, in maxime.
              </div>
            </div>

            <div className="mt-5 md:mt-10 flex  flex-row gap-1 items-center">
              <button className="bg-black text-white text-base px-6 py-2 rounded-md">
                Get Started
              </button>
              <a
                href="#"
                className="text-black text-base px-6 py-2 inline-flex items-center"
              >
                <img
                  className="h-10 w-10 mr-2"
                  src="./images/icons/play.png"
                  alt="Play"
                />
                Watch Video
              </a>
            </div>

            <div className="w-full">
              <img src="./images/pictures/strip.png"></img>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 ">
            <img
              className="relative  w-[45%] md:w-[35%]  top-20 -rotate-12 md:left-[55%] left-[50%]"
              src="./images/pictures/phone-1.png"
              alt="phone-1"
            ></img>
            <img
              className="absolute  w-[45%] md:w-[35%] top-10 md:left-[40%] -rotate-12 left-[25%]"
              src="./images/pictures/phone-2.png"
              alt="phone-2"
            ></img>
            <img
              className="absolute  w-[45%] md:w-[35%] md:left-[25%] -rotate-12 top-0 left-5"
              src="./images/pictures/phone-1.png"
              alt="phone-1"
            ></img>
          </div>
        </div>

        <div className="flex flex-col mt-20 md:mt-10">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
              <img
                className="w-[45%] md:w-[35%]"
                src="./images/pictures/phone-1.png"
                alt="phone-1"
              ></img>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="text-base font-medium"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              >
                FEATURES
              </div>
              <div className="text-4xl  mt-2 md:mt-5">Urify Premium</div>
              <div className="flex flex-col">
                <div className="mt-5 md:mt-10 flex flex-col">
                  <div className="text-base font-bold flex gap-2 items-center">
                    <img
                      className="h-6 w-6"
                      src="./images/icons/icon1.png"
                      alt="icon-1"
                    ></img>
                    Budget Intervals
                  </div>
                  <div className="mt-2 md:mt-5 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, modi. Quasi assumenda asperiores id doloribus
                    odit distinctio necessitatibus praesentium voluptates?
                  </div>
                </div>
                <div className="mt-5 md:mt-10 flex flex-col">
                  <div className="text-base font-bold flex gap-2 items-center">
                    <img
                      className="h-6 w-6"
                      src="./images/icons/icon2.png"
                      alt="icon-2"
                    ></img>
                    Budget Intervals
                  </div>
                  <div className="mt-2 md:mt-5 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, modi. Quasi assumenda asperiores id doloribus
                    odit distinctio necessitatibus praesentium voluptates?
                  </div>
                </div>
                <div className="mt-5 md:mt-10 flex flex-col">
                  <div className="text-base font-bold flex gap-2 items-center">
                    <img
                      className="h-6 w-6"
                      src="./images/icons/icon3.png"
                      alt="icon-3"
                    ></img>
                    Budget Intervals
                  </div>
                  <div className="mt-2 md:mt-5 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, modi. Quasi assumenda asperiores id doloribus
                    odit distinctio necessitatibus praesentium voluptates?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <div
                className="text-base font-medium"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              >
                ADVANTAGES
              </div>
              <div className="text-4xl font-black mt-2 md:mt-5">
                Why Choose Urify?
              </div>
              <div className="mt-5 md:mt-10 text-2xl font-bold flex items-center gap-2">
                <img src="./images/icons/noty.png" className="h-10 w-10"></img>
                Clever Notifications
              </div>
              <div className="mt-5 md:mt-10 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                impedit optio ex vero dolorum corporis voluptate saepe illum
                nobis eaque soluta minima, maiores iusto id deleniti aut
                officia! Nulla quas dolorem ipsam numquam saepe accusamus nemo
                neque voluptatum asperiores ducimus.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
            <img
              className="w-[45%] md:w-[35%]"
              src="./images/pictures/phone-2.png"
              alt="phone-2"
            ></img>
          </div>
        </div>

        <div className="mt-10 md:mt-20 flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
            <img
              className="w-[45%] md:w-[35%]"
              src="./images/pictures/phone-1.png"
              alt="phone-1"
            ></img>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <div>
              <div className="text-2xl font-bold flex items-center gap-2"><img className="h-10 w-10" src='./images/icons/custom.png'></img>Fully Customizeable</div>
              <div className="mt-5 md:mt-10 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat at ipsum incidunt aspernatur, officiis atque omnis
                aperiam fugiat accusamus laboriosam, unde dolorum rem! Voluptate
                amet nisi exercitationem numquam perferendis nam omnis ipsum
                iusto officia sunt atque eaque est laudantium, maxime obcaecati
                doloribus? Aut repellat natus necessitatibus similique at
                aliquam eius?
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="flex flex-col items-center">
            <div className="text-xl md:text-2xl">TESTIMONIAL</div>
            <div className="text-4xl w-full font-black md:w-1/2 text-center mt-2 md:mt-5">
              What Our Users Say About Us?
            </div>
          </div>

          <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 h-64 md:h-96 flex justify-center items-center md:m-6 ">
              <img
                className="w-[30%] sm:w-[20%] md:w-[35%] lg:w-[30%]"
                src="./images/pictures/man-1.png"
                alt="man-1"
              />
              <img
                className=" w-[20%] sm:w-[15%] md:w-[25%] lg:w-[20%] absolute top-0 left-5 sm:left-20 md:left-5"
                src="./images/pictures/man-2.png"
                alt="man-2"
              />
              <img
                className=" w-[20%] sm:w-[15%] md:w-[25%] lg:w-[20%] absolute bottom-0 left-5 sm:left-20 md:left-5"
                src="./images/pictures/man-3.png"
                alt="man-3"
              />
              <img
                className="w-[20%] sm:w-[15%] md:w-[25%] lg:w-[20%] absolute top-0 right-5 sm:right-20 md:right-5"
                src="./images/pictures/man-4.png"
                alt="man-4"
              />
              <img
                className="w-[20%] sm:w-[15%] md:w-[25%] lg:w-[20%] absolute bottom-0 right-5 sm:right-20 md:right-5"
                src="./images/pictures/man-5.png"
                alt="man-5"
              />
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0 flex items-center justify-center">
              <div className="w-full ">
                <div className="text-2xl font-bold">
                  The Best Financial Accounting App Ever!
                </div>
                <div className="mt-5 text-base">
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure cum consequuntur incidunt possimus vero commodi culpa
                  laudantium quibusdam aliquid voluptatibus, maxime dolorem
                  laborum, quod, repellat quas recusandae. Repellendus facere,
                  at fuga culpa quae minus minima. Inventore odit iure dicta
                  neque porro expedita. Quos sit aut unde rerum quisquam
                  corrupti beatae architecto eveniet, provident expedita vitae,
                  debitis ipsum recusandae cupiditate doloribus."
                </div>
                <div className="mt-5 flex flex-row gap-2 items-center">
                  <img src='./images/pictures/tiny-man-1.png' className="w-14 h-14"></img>
                  <img src='./images/pictures/tiny-man-2.png' className="w-12 h-12"></img>
                  <img src='./images/pictures/tiny-man-3.png' className="w-10 h-10"></img>
                  <img src='./images/pictures/tiny-man-4.png' className="w-8 h-8"></img>
                  <img src='./images/pictures/tiny-man-5.png' className="w-7 h-7"></img>
                </div>
                <div className="mt-5 text-lg md:text-xl">Nick Jonas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div
            className="text-base font-medium"
            style={{ color: "rgba(255, 85, 85, 1)" }}
          >
            FAQ
          </div>
          <div className="text-4xl w-full md:w-1/2 mt-2 md:mt-5 font-black">
            Frequently Asked Questions
          </div>
          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="text-white text-base p-6 rounded-md"
              style={{ backgroundColor: "#FF5555" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt maxime, soluta rem necessitatibus ullam nostrum fuga animi
              nam assumenda iste commodi, facilis velit molestiae accusamus eos
              inventore iure quae!
            </div>
            <div
              className="text-white text-base p-6 rounded-md"
              style={{ backgroundColor: "#FF5555" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt maxime, soluta rem necessitatibus ullam nostrum fuga animi
              nam assumenda iste commodi, facilis velit molestiae accusamus eos
              inventore iure quae!
            </div>
            <div
              className="text-white text-base p-6 rounded-md"
              style={{ backgroundColor: "#FF5555" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt maxime, soluta rem necessitatibus ullam nostrum fuga animi
              nam assumenda iste commodi, facilis velit molestiae accusamus eos
              inventore iure quae!
            </div>
            <div
              className="text-white text-base p-6 rounded-md"
              style={{ backgroundColor: "#FF5555" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt maxime, soluta rem necessitatibus ullam nostrum fuga animi
              nam assumenda iste commodi, facilis velit molestiae accusamus eos
              inventore iure quae!
            </div>
          </div>
        </div>

        <div className="mb-20"></div>
      </main>

      <footer>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  className="w-5 h-6"
                  src="./images/icons/main-icon.png"
                  alt="uifry logo"
                ></img>
                <span className="ml-2 text-xl font-bold">uifry</span>
              </div>
              <ul>
                <li className="flex items-center mb-2 gap-2">
                  <img
                    className="w-5 h-5"
                    src="./images/icons/mail.png"
                    alt="mail logo"
                  ></img>
                  <span>Help@Frybix.Com</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    className="w-5 h-5"
                    src="./images/icons/call.png"
                    alt="call logo"
                  ></img>
                  <span>+1234 456 678 89</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Terms Of Use
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Take Tour
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Stay Up To Date</p>
              <form className="flex">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your email"
                ></input>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 mb-20">
          <hr className="w-full border-gray-300" />
          <p className="text-center text-sm text-gray-600 mt-2">
            Copyright 2022 Uifry.Com All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
