import styles from "./../styles/favorits.module.scss"
import Card from "./Card"
import img1 from "./../../assets/favorits/Frame 64-1.png"
import {Swiper , SwiperSlide } from "swiper/react"
import {Navigation ,Pagination ,Autoplay } from "swiper/modules"

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiperCustom.scss'

export default function Favorits (){
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
                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} stars={4}  price="499,000" vote={120} fav/>
                    </SwiperSlide>


                </Swiper>            
            </div>
        </div>
    )
}