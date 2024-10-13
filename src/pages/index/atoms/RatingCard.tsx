import { IRatingCard } from '../types'
import styles from './RatingCard.module.scss'

interface Props {
    data: IRatingCard
}

export function RatingCard({data}: Props) {
    return (
        <div className={styles.container}>
            <img src={data.imgSrc} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}
