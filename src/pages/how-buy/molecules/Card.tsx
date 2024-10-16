import { StepDescription } from '../atoms/StepDescription'
import { ICard } from '../types'
import styles from './Card.module.scss'

interface Props {
    data: ICard
}

export function Card({data}: Props) {
    return (
        <div className={styles.container}>
            <img src={data.imgSrc} alt="Step Logo" />
            <div className={styles.card}>
                <StepDescription data={{
                    cardNumber: data.cardNumber,
                    title: data.title,
                    description: data.description
                }} />
            </div>
        </div>
    )
}
