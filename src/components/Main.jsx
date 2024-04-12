import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1712093828214-0b74bf899528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Hello</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">We provide students with
                        <TypeAnimation
                            sequence={[
                                'internships',
                                1000, 
                                'scholarships',
                                1000,
                                'donations',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', padding: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[150px] w-full">
                        <FaXTwitter className="cursor-pointer" size={20} />
                        <FaFacebookF className="cursor-pointer" size={20} />
                        <FaInstagram className="cursor-pointer" size={20} />
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;