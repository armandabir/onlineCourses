import styles from "./../styles/courses.module.scss"
import Card from "./Card"
import img1 from "./../../assets/courses/Frame 64.png"
import Button from "./Button"


export default function Courses({}){
    return (
        <div className={styles.courses}>
               <h2>جدیدترین دوره‌های آنلاین</h2>
            <div className={styles.cardContainer}>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
                <Card className={styles.card} title=" آموزش برنامه نویسی جاوا اسکریپت ب..." img={img1} price="499,000"/>
            </div>
            <div className="text-center my-10">
                 <Button  classes="text-white rounded-full px-4 text-xss origin-center md:text-2xl">بیشتر</Button>
            </div>
        </div>
    )
}