import { IField } from '../types'
import styles from './LargeField.module.scss'

interface Props {
    data: IField
}

export function LargeField({data}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div className={styles.price}>
                <h4>{data.price}</h4>
            </div>
        </div>
    )
}
