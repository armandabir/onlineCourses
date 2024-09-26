import styles from "./../styles/features.module.scss"
import img from "./../../assets/features/Frame 512857.png"
import Isolation from "./../../assets/features/Isolation_Mode.png"
import Button from "./Button"
import users from "./../../assets/features/Users.png"
export default function Features (){
    return (
        <div className={styles.features}>
            <div className={styles.containers}>
                <div className={styles.rightSide}>
                    <div className={styles.items}>
                        <Button classes="bg-orange rounded-full p-1 md:p-2 my-auto w-full h-10 md:w-20 md:h-14 mx-2"><img src={Isolation} alt="" /></Button>
                        <div className={styles.contnet}>
                            <h2>جدیدترین مهارت ها را بیاموزید</h2>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                            </p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <Button classes="bg-orange rounded-full p-1 md:p-2 my-auto w-full h-10 md:w-20 md:h-14 mx-2"><img src={Isolation} alt="" /></Button>
                        <div className={styles.contnet}>
                            <h2>جدیدترین مهارت ها را بیاموزید</h2>
                            <p className="">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                            </p>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <Button classes="bg-orange rounded-full p-1 md:p-2 my-auto w-full h-10 md:w-20 md:h-14 mx-2"><img src={Isolation} alt="" /></Button>
                        <div className={styles.contnet}>
                            <h2>جدیدترین مهارت ها را بیاموزید</h2>
                            <p className="w-">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src={img} alt="" />
                </div>   
                <div className={styles.leftSide}>
                    <div className={styles.items}>
                        <div className={styles.contnet}>
                            <h2>2000</h2>
                            <p className="text-green-700">
                                دانش آموزش
                            </p>
                        </div>
                        <Button classes="bg-orange rounded-full p-3 md:p-2 my-auto w-1/3 h-10 md:w-14 md:h-14 mx-auto"><img src={users} alt="" /></Button>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.contnet}>
                            <h2>2000</h2>
                            <p className="text-green-700">
                                دانش آموزش
                            </p>
                        </div>
                        <Button classes="bg-orange rounded-full p-3 md:p-2 my-auto w-1/3 h-10 md:w-14 md:h-14 mx-auto"><img src={users} alt="" /></Button>
                    </div>

                    <div className={styles.items}>
                        <div className={styles.contnet}>
                            <h2>2000</h2>
                            <p className="text-green-700">
                                دانش آموزش
                            </p>
                        </div>
                        <Button classes="bg-orange rounded-full p-3 md:p-2 my-auto w-1/3 h-10 md:w-14 md:h-14 mx-auto"><img src={users} alt="" /></Button>
                    </div>
                </div>
            </div>
        </div>
    )

}