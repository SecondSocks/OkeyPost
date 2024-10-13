import styles from './Footer.module.scss'
import { InfoBlock } from './molecules/InfoBlock'

export function Footer() {
    return (
        <div className={styles.container}>
            <InfoBlock />
            <div className={styles.copyright}>
                <p>© 2021 Okeypost . Все права защищены.</p>
            </div>
        </div>
    )
}
