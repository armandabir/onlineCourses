import styles from "./../styles/MastersCard.module.scss"
export default function MastersCard({name,title,img,desc,mail}){
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p>{mail}</p>
            </div>
        </div>
    )
}