import { AdditionallyContent } from '../molecules/AdditionallyContent'
import styles from './Additionally.module.scss'

export function Additionally() {
    return (
        <div className={styles.container}>
           <AdditionallyContent />
        </div>
    )
}
