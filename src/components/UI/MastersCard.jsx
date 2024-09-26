import styles from "./../styles/MastersCard.module.scss"
export default function MastersCard({name,title,img,desc,mail}){
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h3>متیو ای. مک نات</h3>
                <h4>جاوا اسکریپت پیشرفته</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <p>Professor@Matthew E. McNatt</p>
            </div>
        </div>
    )
}