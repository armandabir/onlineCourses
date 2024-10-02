import hamberger from "./../../assets/header/menu-01.png"
import logo from "./../../assets/header/logo.png"
import vector from "./../../assets/header/Vector.png"
import boy from "./../../assets/header/boy.png"
import styles from "./../styles/header.module.scss"
import Button from "./Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {fab} from "@fortawesome/free-brands-svg-icons"
import { useContext } from "react"
import BergerMenuContext from "../../store/BergerMenuContext"
library.add(fas,fab)
export default function Header(){
    const {onOpen}=useContext(BergerMenuContext)
    return (
        <>
      
        <div className={styles.bgHeader}>
            <div className={styles.vector}>
                <img src={vector} alt="" />
            </div>
            <div className="mt-28 mr-20 xl:mr-auto">
                <img  src={boy} alt="" />
            </div>
        </div>
        <header>
            <nav className="container mx-auto columns-2 xl:columns-3">
                <div className="flex">
                    <span className={`${styles.logoText} text-lg font-bold xl:text-3xl`}>Logo</span>
                    <img className={`${styles.logo} xl:w-10 mr-2`} src={logo} alt="logo" />
                </div>
                <div className={styles.buttons}>
                    <ul>
                        <li>خانه</li> 
                        <li>دوره های آنلاین</li> 
                        <li>آزمون های آنلاین</li> 
                        <li>درباره ما</li> 
                        <li>ارتباط با ما</li> 
                    </ul>
                </div>
                <div className="xl:hidden text-left">
                    <img onClick={onOpen} className="mr-auto" src={hamberger} alt="hamberger-bt" />
                </div>
                <div className={`${styles.login} hidden xl:flex justify-end`}>
                    <span className="ml-2 p-1">ورود</span>
                    <Button classes="rounded-full w-1/5">ثبت نام</Button>
                </div>
            </nav>

            <div className={`${styles.content} mt-5`}>
                 <div className="w-2/5 xl:p-10 xl:mt-20 md:p-10 md:mt-10">
                    <h2 className="mb-2 xl:mb-7 xl:text-4xl md:text-4xl font-bold">یاد گیری آنلاین</h2>
                    <p className="text-xs xl:text-2xl md:text-lg font-bold">
                        دسترسی به بیش از 5000 دوره آموزشی 
                        از 300 مدرس و موسسه
                    </p>

                    <div className={`${styles.search} md:mt-10 xl:mt-10`}>
                        <input className="w-full h-7 xl:h-14 md:h-10 text-sm" type="text" placeholder="جستوجو آموزش ..." />
                        <Button classes="rounded-full  text-white w-7 h-7 p-1 xl:w-14 xl:h-14 xl:text-3xl md:h-10 md:w-10"><FontAwesomeIcon size="xs"  icon="fa-solid fa-magnifying-glass" /></Button>
                    </div>
                    
                    <div className="contacts flex justify-around w-2/3 xl:w-1/2 mx-auto my-5 xl:my-20">
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-twitter" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-instagram" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-linkedin-in" /></Button>
                        <Button classes="rounded-full  text-white w-5 h-5  xl:w-10 xl:h-10 xl:p-1 xl:text-3xl md:h-7 md:w-7"><FontAwesomeIcon size="xs" icon="fa-brands fa-facebook-f" /></Button>
                    </div>

                 </div>
               
            </div>
         
        </header>
        </>
    )

}
