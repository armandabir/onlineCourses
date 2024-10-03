import styles from "./../styles/card.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faStar} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";
library.add(fas,far)

export default function Card({img,fav,title,stars=0,vote=0,name="",price}){
    
function mystars(num){
    let arman=[]
    for (let i = 1; i <= 5; i++) {
        if(i<=num){

            arman[i] = <FontAwesomeIcon className="text-orange-400" icon="fa-solid fa-star" />
        }else{
            arman[i]= <FontAwesomeIcon className="text-orange-100" icon="fa-regular fa-star" />
        }
    }
    return arman
}
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                     
                {fav && 
                    (
                        <>
                            <h3>{title}</h3>
                            <span>
                                {   
                                    mystars(stars)
                                }
                              
                            </span>
                            <span>{`(${vote})`}</span>
                           
                        </>
                    )
                }
                
                {!fav && 
                    (
                        <>
                            <h3>{title}</h3>
                            <p><FontAwesomeIcon className="text-orange-500" icon="fa-regular fa-user" />  مدرس: <span className="text-orange-500">{name}</span></p>
                            <p><FontAwesomeIcon className="text-orange-500" icon="fa-regular fa-clock" />  شروع دوره: 5 اسفند 1402</p>
                        </>
                    )
                }
                

            </div>
            <hr />
            <div className={styles.price}>
                <div className="w-2/3 ml-auto">{`${price} تومان`}</div>
                <Button textOnly classes="text-orange-400 bg-orange-200 rounded-full w-5 h-5 origin-center rotate-45 md:w-7 md:h-7 md:text-2xl"><FontAwesomeIcon size="xs" icon={faArrowLeft}/></Button>
            </div>
        </div>
    )
}