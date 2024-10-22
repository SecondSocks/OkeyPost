import { BannerContent } from '../molecules/BannerContent'
import styles from './Banner.module.scss'

export function Banner() {
    return (
        <div className={styles.container}>
           <BannerContent />
        </div>
    )
}
