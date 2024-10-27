import { Card } from '../atoms/Card'
import { Cards } from '../molecules/Cards'
import styles from './Main.module.scss'

export function Main() {
    return (
        <div className={styles.container}>
            <Cards />
        </div>
    )
}
