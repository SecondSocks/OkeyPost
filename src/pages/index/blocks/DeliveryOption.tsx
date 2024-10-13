import { DeliveryOptionContent } from '../molecules/DeliveryOptionContent'
import styles from './DeliveryOption.module.scss'

export function DeliveryOption() {
    return (
        <div className={styles.container}>
           <DeliveryOptionContent />
        </div>
    )
}
