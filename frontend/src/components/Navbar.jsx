import { useState } from "react";
import logo from "/Image/logo-no-background.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex justify-center items-center bg-[#E6EAE7] drop-shadow-sm h-[80px]">
        <div className="flex justify-between items-center sm:p-20 p-10 w-full h-full">
          <a href="/">
            <img
              src={logo}
              alt="Smart Sell"
              className="w-10 h-10 rounded-full  transition-all"
            />
          </a>

          <ul className="hidden xl:flex items-center gap-12 text-[#3D3D4E] font-semibold tracking-wider">
            <a href="/features">
              <li className="p-2 hover:bg-[#1B5844] hover:text-white rounded-md transition-all">
                Features
              </li>
            </a>
            <a href="/about">
              <li className="p-2 hover:bg-[#1B5844] hover:text-white rounded-md transition-all">
                About
              </li>
            </a>
            <a href="/contact">
              <li className="p-2 hover:bg-[#1B5844] hover:text-white rounded-md transition-all">
                Contact Us
              </li>
            </a>
          </ul>

          <div className="relative hidden md:flex items-center justify-center gap-3">
            <div className="z-10 flex min-h-[16rem] items-center justify-center">
              <div className="flex gap-4">
                <a href="/login">
                  <button className="border-2 border-[#1B5844] text-[#1B5844] px-6 py-2 rounded-lg font-semibold hover:bg-[#1B5844] hover:text-white transition duration-300">
                    Login
                  </button>
                </a>
                <a href="/sell">
                  <button className="bg-[#1B5844] text-white px-6 py-2 rounded-lg font-semibold  transition border-2">
                    Start Selling
                  </button>
                </a>
              </div>
            </div>
          </div>

          <i
            className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-[#1B5844]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>

          <div
            className={`bg-[#E6EAE7] absolute xl:hidden top-20 left-0 w-full h-screen flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease, opasity 0.3s ease" }}
          >
            <li className="list-none w-full text-center p-4 hover:bg-[#1B5844] hover:text-white transition-all cursor-pointer">
              Team
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-[#1B5844] hover:text-white transition-all cursor-pointer">
              Alumini
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-[#1B5844] hover:text-white transition-all cursor-pointer">
              Events
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-[#1B5844] hover:text-white transition-all cursor-pointer">
              Contact Us
            </li>

            <div className="flex gap-4 p-4 ">
              <a href="/login">
                <button className="border-2 border-[#1B5844] text-[#1B5844] px-6 py-2 rounded-lg font-semibold hover:bg-[#1B5844] hover:text-white transition duration-300">
                  Login
                </button>
              </a>
              <a href="/sell">
                <button className="bg-[#1B5844] text-white px-6 py-2 rounded-lg font-semibold  transition border-2">
                  Start Selling
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
