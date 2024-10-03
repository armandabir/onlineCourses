import styles from "./../styles/favorits.module.scss"
import Card from "./Card"
import img1 from "./../../assets/favorits/Frame 64-1.png"
import {Swiper , SwiperSlide } from "swiper/react"
import {Navigation ,Pagination ,Autoplay } from "swiper/modules"

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiperCustom.scss'
import { useEffect, useState } from "react"
import { data } from "autoprefixer"

export default function Favorits (){
    const [favs,setFaves]=useState([]);
    
    async function fechFaves(){
        const res = await fetch("http://localhost:3030/favs")
        const data = await res.json();
        setFaves(data);
    }


    useEffect(()=>{
        fechFaves()
    },[])
    console.log(favs)


    return (
        <div className={styles.favorits}>
            <h2>محبوب ترین ها</h2>
            <div className={styles.cardContainer}>
                <Swiper className="p-10"
                    modules={[Navigation ,Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{clickable:true}}
                    // autoplay={{delay:1000}}
                    breakpoints={{640:{ slidesPerView: 4,
                        spaceBetween: 30}}}
                >

                    {
                        favs.map((fav)=>
                            <SwiperSlide key={fav.id}>
                                 <Card title={fav.title} img={`http://localhost:3030${fav.image}`} stars={Math.trunc(fav.stars)}  price={fav.price} vote={fav.participants} fav/>
                            </SwiperSlide>  
                        )
                    }

                </Swiper>            
            </div>
        </div>
    )
}