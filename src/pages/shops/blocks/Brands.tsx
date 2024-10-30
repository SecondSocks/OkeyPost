import { BrandContent } from '../molecules/BrandContent'
import styles from './Brand.module.scss'

export function Brands() {
    return (
        <div className={styles.container}>
            <BrandContent />
        </div>
    )
}
