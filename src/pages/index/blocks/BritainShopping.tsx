import { BritainShoppingContent } from '../molecules/BritainShoppingContent'
import styles from './BritainShoping.module.scss'

export function BritainShoping() {
    return (
        <div className={styles.container}>
            <BritainShoppingContent />
        </div>
    )
}
