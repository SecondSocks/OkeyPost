import { BannerContent } from '../molecules/TopBannerContent'
import styles from './TopBanner.module.scss'

export function Banner() {
    return (
        <div className={styles.container}>
            <BannerContent/>
        </div>
    )
}
