import styles from "./../styles/hamMenu.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser  } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react";
import BergerMenuContext from "../../store/BergerMenuContext";
import Accordion from "./Accordion";

  

export default function HamMenu (){
    const {onClose}=useContext(BergerMenuContext);
    return (
        <>
        <div className={styles.menuContainer}></div>
        <div className={`${styles.HamMenu} xl:hidden h-full w-1/2 text-right absolute bottom-0 left-0`}>
            <div className={`${styles.xmark} mt-10 pt-5 pb-1 px-5`}>
                <button onClick={onClose}><FontAwesomeIcon size="lg" icon={faXmark} /></button>
            </div>

            <div className="flex items-center p-7 text-green-800">
                <FontAwesomeIcon size="lg" icon={faCircleUser} />
                <span className="mr-3">
                    ورود/ثبت نام

                </span>
            </div>
            <div>
                <Accordion />
            </div>
        </div>
        </>
    )
}