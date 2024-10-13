import { IReviewCard } from '../types'
import styles from './ReviewCard.module.scss'

interface Props {
    data: IReviewCard
}

export function ReviewCard({data}: Props) {
    return (
        <div className={styles.container}>
            <img src={data.imgSrc} alt="Review" />
            <div className={styles.info}>
                <h5>{data.name}</h5>
                <img src={`star${data.rating}.png`} alt="Raiting" />
                <p>{data.comment}</p>
                <h6>Дата: <span>{data.date}</span></h6>
                <h6>Город: <span>{data.city}</span></h6>
            </div>
        </div>
    )
}
