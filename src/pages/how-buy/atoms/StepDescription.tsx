import { IStepProps } from '../types'
import styles from './StepDescription.module.scss'

interface Props {
    data: IStepProps
}

export function StepDescription({data}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{data.cardNumber}</h1>
                <h2>{data.title}</h2>
            </div>
            <p>{data.description}</p>
        </div>
    )
}
