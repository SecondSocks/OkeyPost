import type { ICard } from '../types'
import styles from './Card.module.scss'

interface Props {
    data: ICard
}

export function Card({data}: Props) {
    return (
        <div className={styles.container}>
            <div>
                <img src={data.imgSrc} alt={data.title} />
            </div>
            <h5>{data.title}</h5>
        </div>
    )
}
