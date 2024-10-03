import {Swiper , SwiperSlide } from "swiper/react"
import {Navigation ,Pagination ,Autoplay } from "swiper/modules"
import img from "./../../assets/masters/Frame 64.png"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiperCustom.scss'
import MastersCard from "./MastersCard";
import styles from "./../styles/masters.module.scss"
import { useEffect, useState } from "react";

export default function Masters(){
    const [instructors,setInstructors]=useState([])
    async function fetchInstructors() {
        const res = await fetch("http://localhost:3030/instructors");
        const data = await res.json();
        setInstructors(data);

    }

    useEffect(()=>{
        fetchInstructors()
    },[])

    return (
        <div className={styles.masters}>
        <h2>مدرسین ما</h2>
        <div className={styles.cardContainer}>
            <Swiper className="p-10"
                modules={[Navigation ,Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{clickable:true}}
                // autoplay={{delay:1000}}
                breakpoints={{640:{ slidesPerView: 4,
                    spaceBetween: 15}}}
            >
                

                {
                    instructors.map((ins)=>
                        <SwiperSlide key={ins.id}>
                            <MastersCard key={ins.id} img={`http://localhost:3030${ins.image}`} name={ins.name} title={ins.job} desc={ins.description} />
                        </SwiperSlide>
                    )
                }
              


            </Swiper>            
        </div>
    </div>
    )
}