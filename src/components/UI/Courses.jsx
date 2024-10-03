import styles from "./../styles/courses.module.scss"
import Card from "./Card"
import img1 from "./../../assets/courses/Frame 64.png"
import Button from "./Button"
import { useEffect, useState } from "react"


export default function Courses({}){
    const [courses,setCourses] = useState([]);
    async function fechCourses() {
        const res= await fetch("http://localhost:3030/courses");
        const data=await res.json();
        setCourses(data);
    }

    useEffect(()=>{
        fechCourses()
    },[])

    return (
        <div className={styles.courses}>
               <h2>جدیدترین دوره‌های آنلاین</h2>
            <div className={styles.cardContainer}>
                {
                    courses.map((course,key)=>
                        {
                            if(key <= 5){
                                return <Card className={styles.card} title={course.title} img={`http://localhost:3030${course.image}`} price={course.price} name={course.instructor.name}/>
                            }
                        }
                    )
                }
                
            </div>
            <div className="text-center my-10">
                 <Button  classes="text-white rounded-full px-4 text-xss origin-center md:text-2xl">بیشتر</Button>
            </div>
        </div>
    )
}