import { useState } from "react"
import  catsIcon from "./../../assets/ham/dashboard-square.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faChevronLeft,faChevronDown,faMagnifyingGlass,faArrowLeftLong} from "@fortawesome/free-solid-svg-icons"

export default function Accordion({title,}){
    const [accorOpen,setAccorOpen]=useState(false);
    function handleClick(){
        setAccorOpen((accorOpen)=>!accorOpen)
    }
    return (
        <div className="p-2">
            <button onClick={handleClick} className="flex justify-between w-full">
                <div className="flex items-center mr-5">
                    <img src={catsIcon} alt="" />
                    <span className="mr-2 text-green-800"> دسته بندی ها</span>
                </div>
               {accorOpen ?  <FontAwesomeIcon className=" text-green-800" icon={faChevronDown} /> : <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft } />}
            </button>
            <div className={`grdi overflow-hidden transition-all duration-300 ease-in-out ${accorOpen ? "grid-rows-[1fr] opacity-100" :" grid-rows-[0fr] opacity-0" }`}>

                <div className="relative mt-5">
                    
                    <input className="rounded-3xl mx-auto block h-8 bg-neutral-300 text-xs w-3/4" type="text" name="" id="" placeholder="        جستجوی دسته بندی" />
                    <FontAwesomeIcon className="absolute top-0 right-7 p-2 text-neutral-600 mb-1" icon={faMagnifyingGlass} />
                </div>

                <div className="flex p-5 mr-2">
                    <span className="ml-3">همه آموزش ها</span>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </div>
                <div className="overflow-hidden mr-2 ">
                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> برنامه نویسی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />

                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> طراحی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />


                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> بازاریابی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />


                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> کسب و کار</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> سبک زندگی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> عکاسی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> موسیقی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />


                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> علم داده</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />


                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> توسعه شخصی</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> سلامت</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> سرمایه گذاری</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />



                    <div className=" p-5 flex justify-between w-full">
                        <span className=" text-green-800"> درس دادن</span>
                        <FontAwesomeIcon className=" text-green-800" icon={faChevronLeft }/>
                    </div>      
                    <hr />


                </div>
            </div>
        </div>
    )
}