import styles from "./../styles/comment.module.scss"
import qout from "./../../assets/comments/Vector.png"
export default function Comment({title,jobTitle,message,img}){
    return (
    <div className={styles.card}>
        <div className={styles.cardTitle}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.title}>
                <h3>{title}</h3>
                <p>{jobTitle}</p>
            </div>
          
            <img className={styles.quotation} src={qout}  alt="" />
        </div>
        <div className={styles.cardBody}>
            <p>{message}</p>
        </div>       
    </div>
    )
}