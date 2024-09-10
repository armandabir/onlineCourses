import styles from "./../styles/button.module.scss"
export default function Button({children,classes,textOnly}){
    let cssClass= textOnly?classes:classes + " " + styles.orange
    return (
       <button className={cssClass}>{children}</button>
    )
}