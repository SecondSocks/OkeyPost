import { WSLargeFields } from '../molecules/WSLargeFields'
import { WSSmallFields } from '../molecules/WSSmallFields'
import styles from './WarehouseServices.module.scss'

export function WarehouseServices() {
    return (
        <div className={styles.container}>
            <h2>Услуги склада</h2>
           <WSSmallFields />
           <WSLargeFields />
        </div>
    )
}
