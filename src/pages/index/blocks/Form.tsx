import { FormContent } from '../molecules/FormContent'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.container}>
           <FormContent />
        </div>
    )
}
