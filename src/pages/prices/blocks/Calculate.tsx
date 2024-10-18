import { CalculateContent } from '../molecules/CalculateContent'
import styles from './Calculate.module.scss'

export function Calculate() {
    return (
        <div className={styles.container}>
           <CalculateContent />
        </div>
    )
}
