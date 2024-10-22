import { GreenButton } from '../../components/green-button/Button'
import styles from './BannerContent.module.scss'

export function BannerContent() {
    return (
        <div className={styles.container}>
           <img src="bonuses-banner.png" alt="Banner Illustration" />
           <div>
                <h2>Готовы начать зарабатывать вместе с нами?</h2>
                <p>Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</p>
                <GreenButton  text={'Присоединиться'} width={240} height={66} />
           </div>
        </div>
    )
}
