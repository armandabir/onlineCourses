import styles from "./../styles/comments.module.scss"
import Comment from "./comment";
import img1 from "./../../assets/comments/Frame 513058.png"
import {Swiper , SwiperSlide } from "swiper/react"
import {Navigation ,Pagination ,Autoplay } from "swiper/modules"

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/swiperCustom.scss'

export default function Comments (){
    return (
        <div className={styles.containers}>
            <h2>از زبان شما</h2>
            <div className={styles.cardContainer}>
                <Swiper className="p-10"
                    modules={[Navigation ,Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable:true}}
                    // autoplay={{delay:1000}}
                    breakpoints={{640:{ slidesPerView: 2,
                        spaceBetween: 15}}}
                >
                    <SwiperSlide>
                        <Comment img={img1} title="جیکوب جونز" jobTitle="طراح ux/ui" message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment img={img1} title="جیکوب جونز" jobTitle="طراح ux/ui" message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Comment img={img1} title="جیکوب جونز" jobTitle="طراح ux/ui" message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Comment img={img1} title="جیکوب جونز" jobTitle="طراح ux/ui" message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. "/>

                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}