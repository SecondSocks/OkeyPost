import { BottomFormContent } from '../atoms/BottomFormContent'
import { TopFormContent } from '../atoms/TopFormContent'
import styles from './FormContent.module.scss'

export function FormContent() {
    return (
        <div className={styles.container}>
           <TopFormContent />
           <BottomFormContent />
        </div>
    )
}
