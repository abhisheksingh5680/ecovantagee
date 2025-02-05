"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed  w-full z-50">
            <div className="bg-[#a2b45d] text-white py-2 px-4">
                <div className="container mx-auto flex items-center justify-center">
                    <div className="flex items-center gap-2">
                        <Image src="/assests/Cloud.png" width={30} height={30} alt="phone" />
                        <p className="text-sm md:text-base font-semibold">
                            10,724,707 tonnes of carbon abated
                        </p>
                    </div>
                </div>
            </div>
            <nav className="bg-white shadow-md">
                <div className=" container mx-auto px-4 xl:px-0 2xl:px-12  flex items-center justify-between py-4 xl:py-6 2xl:py-8">
                    <div className="flex items-center">
                        <Image
                            src="/assests/ecovantage.svg"
                            width={168}
                            height={88}
                            alt="project logo"
                            className="h-full w-[95%] xl:w-[95%]"
                        />
                    </div>
                    <div className="flex items-center  gap-6">
                        <ul className="hidden lg:flex lg:space-x-1 xl:space-x-4 2xl:space-x-5 text-base font-bold text-[#3A4042]">
                            {["Energy Certificates", "Professional Services", "Products & Technologies", "Resources", "About", "Contact"].map((item, index) => (
                                <li key={index} className="hover:bg-[#a2b45d] hover:text-white py-2 px-2 transition">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:block">
                            <button className="bg-[#a2b45d] text-white p-3 xl:p-4 2xl:p-5 rounded-2xl hover:bg-[#8ea451] transition">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    <button
                        className="lg:hidden text-[#3A4042] text-2xl px-6"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className={`${menuOpen ? "block" : "hidden"} lg:hidden bg-white shadow-md absolute w-full left-0 z-50`}>
                    <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-bold text-[#3A4042]">
                        {["Energy Certificates", "Professional Services", "Products & Technologies", "Resources", "About", "Contact"].map((item, index) => (
                            <li key={index} className="hover:bg-[#a2b45d] hover:text-white px-4 py-2 w-full text-center rounded-md transition">
                                <Link href="#">{item}</Link>
                            </li>
                        ))}
                        <li>
                            <button className="bg-[#a2b45d] text-white p-3 rounded-lg w-full">
                                <FaSearch />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Index;





