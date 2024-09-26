import styles from "./../styles/footer.module.scss"
import logo from "./../../assets/header/logo.png"
import Button from "./Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {fab} from "@fortawesome/free-brands-svg-icons"
library.add(fas,fab)

export default function footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.contact}>
                <div className="flex">
                    <span className={`${styles.logoText} text-lg font-bold xl:text-3xl`}>Logo</span>
                    <img className={`${styles.logo} xl:w-10 mr-2`} src={logo} alt="logo" />
                </div>
                <h2>تماس با ما</h2>
                <p>
                    آموزش مجازی با کیفیت برای همه؛ بدون مرز، همیشه، همه‌جا   
                </p>
                <p>
                    شماره تماس: 09123456789
                </p>
                <p>
                    Email: example@mail.com
                </p>
                <div className="contacts flex justify-around w-2/3 xl:w-1/2 my-5 xl:my-5">
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-twitter" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-instagram" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-linkedin-in" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-facebook-f" /></Button>
                </div>
            </div>
            <div className={styles.links}>
                <h2>لینک ها</h2>
                <ul>
                    <li>
                        خانه
                    </li>
                    <li>
                        دوره های آنلاین
                    </li>
                    <li>
                        آزمون های آنلاین    
                    </li>
                    <li>
                        درباره ما                    
                    </li>
                    <li>
                        ارتباط با ما
                    </li>
                </ul>
            </div>
            <div className={styles.category}>
                <h2>دسته بندی ها</h2>
                <ul>
                    <li>
                        برنامه نویسی
                    </li>
                    <li>
                        طراحی
                    </li>
                    <li>
                        بازاریابی
                    </li>
                    <li>
                        سبک زندگی                    
                    </li>
                    <li>
                        عکاسی
                    </li>
                    <li>
                        موسیقی
                    </li>
                </ul>
            </div>
            <div className={styles.customer}>
                <h2>مشترک شدن</h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                </p>
                <input type="text" />
                <Button textOnly classes="bg-orange-500 text-white px-5 py-2 rounded-full my-5"> مشترک شدن</Button>
            </div>
        </div>
    )
}