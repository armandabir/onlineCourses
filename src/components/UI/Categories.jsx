import styles from "./../styles/categories.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";
import script from "./../../assets/icons/FileHtml.png"
import { useEffect, useState } from "react";

export default function Categories(){
    const [categories,setCategories] = useState([]);
    async function fechCategories() {
        const res= await fetch("http://localhost:3030/categories");
        const data=await res.json();
        setCategories(data);
    }

    useEffect(()=>{
        fechCategories()
    },[])

    return (
        <div className={`${styles.categories} mt-10 p-5 text-green-900`}>
            <h1 className="text-center font-bold p-5">دسته بندی ها</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 md:p-10">
                {
                    categories.map((cat,key)=>
                        (key < 1) ? (
                            <div key={key} className="flex p-1 bg-white h-8 justify-around rounded-lg md:rounded-3xl md:h-18 md:p-5 border-solid border-2 border-orange-500">
                                <img className="size-6 md:size-8" src={`http://localhost:3030/images/${cat.icon}`} alt="" />
                                <div className="text-xxs w-1/2 my-auto md:text-sm xl:text-lg">{cat.title}</div>
                                <Button classes=" text-white rounded-full w-5 h-5 origin-center rotate-45 md:w-10 md:h-10 md:text-2xl"><FontAwesomeIcon size="xs" icon={faArrowLeft}/></Button>
                            </div>
                        ) :(

                        <div key={key} className="flex p-1 bg-white h-8 justify-around rounded-lg md:rounded-3xl md:h-18 md:p-5 ">
                            <img className="size-6 md:size-8" src={`http://localhost:3030/images/${cat.icon}`} alt="" />
                            <div className="text-xxs w-2/3 my-auto md:text-sm xl:text-lg">{cat.title}</div>
                            <Button textOnly  classes=" text-orange-500 rounded-full w-5 h-5 origin-center rotate-45 md:w-10 md:h-10 md:text-2xl"><FontAwesomeIcon size="xs" icon={faArrowLeft}/></Button>
                        </div>
                        )
                    )
                }
                {/* <div className="flex p-1 bg-white h-8 justify-around rounded-lg md:rounded-3xl md:h-18 md:p-5">
                    <img className="size-6 md:size-8" src={script} alt="" />
                    <div className="text-xxs w-1/2 my-auto md:text-sm xl:text-lg">برنامه نویسی</div>
                    <Button textOnly  classes=" text-orange-500 rounded-full w-5 h-5 origin-center rotate-45 md:w-10 md:h-10 md:text-2xl"><FontAwesomeIcon size="xs" icon={faArrowLeft}/></Button>
                </div> */}

                
            </div>
            
            
        </div>
    )
}