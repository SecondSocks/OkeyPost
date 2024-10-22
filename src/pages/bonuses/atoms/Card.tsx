import type { ICard } from '../types'
import styles from './Card.module.scss'

interface Props {
    data: ICard
}

export function Card({data}: Props) {
    return (
        <div className={styles.container}>
           <img src={data.imgSrc} alt="Icon" />
           <h5>{data.title}</h5>
           <p>{data.description}</p>
        </div>
    )
}
