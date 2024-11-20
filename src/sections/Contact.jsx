import React from "react";

import { section } from "../components/export"
import twitter from "../assets/twitter.png"
import ticktok from "../assets/ticktok.png"
import instagramnew from "../assets/instagramnew.png"
import youtubenew from "../assets/youtubenew.png"
import facebook from "../assets/facebook.png"







const Contact = () => {
    return (
        <>
            <div id="contact" className="w-full bg-gray-900 text-blue-800 px-2  ">

                <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-7 border-b-2 border-gray-600 py-8">

                    {
                        section.map((section, index) => (

                            <div key={index}>
                                <h6 className="font-bold px-5 uppercase pt-2">
                                    {section.title}
                                </h6>

                                <ul>
                                    {section.items.map((item, i) => (

                                        <li key={i} className="py-1 px-5 text-gray-500 hover:text-white cursor-pointer" >
                                            {item}

                                        </li>

                                    ))}

                                </ul>

                            </div>


                        ))
                    }


                    <div className="col-span-2 pt-8 md:pt-2">
                        <p className="font-bold uppercase ">
                            Subscribe to our YouTube channel
                        </p>

                        <p className="py-4">
                            Kindly click on the icon below to follow us on all social platforms.
                        </p>

                        <form className=" flex flex-col sm:flex-row ">

                            <input type="email" placeholder="Enter email adress" className="w-full p-2 mr-2 rounded-md mb-4 "></input>
                        </form>
                        <button className="p-2 mb-4">
                            subscribe
                        </button>

                    </div>


                </div>

                <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between gap-x-3 sm:flex-row text-center text-gray-500">
                    <i class="fas fa-home"></i>  <p className="py-4">

                        @2024 Shegya Machinery Nigeria. All Rights Reserved.

                    </p>

                    <div className="flex justify-between items-center sm:w-[400px] pt-2 text-xl gap-3">
                        <a href="https://x.com/ShengyaMac46712?t=cM-K8AeJ55RmeZSK-nmWXA&s=09" target="_blank" rel="">
                            <img src={twitter} className="w-10 h-10 border-x-white" />
                        </a>
                        <a href="https://www.tiktok.com/@shengya_machinery?_t=8quvZQ50aft&_r=1" target="_blank" rel="">
                            <img src={ticktok} className="w-18 h-14 border-x-white " />
                        </a>
                        <div className="pr-7">
                            <a href="https://www.instagram.com/shengya_machinery/profilecard/?igsh=azk0dnV1aXg1ZzAx" target="_blank" rel="">
                                <img src={instagramnew} className="w-10 h-10   border-x-white" />
                            </a>
                        </div>
                        <a href="https://www.facebook.com/61553855860762/" target="_blank" rel="">
                            <img src={facebook} className="w-6 h-10 border-x-white" />
                        </a>
                        <a href="https://youtu.be/O6nkBSh51Y4?si=QsbpGwByk29YPmGM" target="_blank" rel="">
                            <img src={youtubenew} className="w-18 h-12 border-x-white" />
                        </a>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Contact; // Make sure this line is present
