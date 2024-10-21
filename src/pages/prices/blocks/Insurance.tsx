import { InsuranceContent } from '../molecules/InsuranceContent'
import styles from './Insurance.module.scss'

export function Insurance() {
    return (
        <div className={styles.container}>
           <InsuranceContent />
        </div>
    )
}
