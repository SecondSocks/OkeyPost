import { BannerLeftSide } from "../atoms/TopBannerLeftSide"
import styles from "./TopBannerContent.module.scss"

export function BannerContent() {
    return (
        <div className={styles.container}>
            <BannerLeftSide />
            <img src="index-banner.png" alt="Index Banner" />
        </div>
    )
}
