import { BottomBannerContent } from '../molecules/BottomBannerContent'
import styles from './BottomBanner.module.scss'

export function BottomBanner() {
    return (
        <div className={styles.container}>
           <BottomBannerContent />
        </div>
    )
}
