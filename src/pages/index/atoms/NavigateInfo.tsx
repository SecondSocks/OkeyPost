import type { INavigateInfo } from '../types'
import styles from './NavigateInfo.module.scss'

interface Props {
    data: INavigateInfo
}

export function NavigateInfo({data}: Props) {
    return (
        <div className={styles.container}>
            <p>Срок доставки примерно {data.deliveryTime}</p>
            <h3>Вы экономите до <span className={styles.anotherColor}>{data.moneySaving}</span></h3>
        </div>
    )
}
