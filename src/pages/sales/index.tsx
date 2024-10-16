import { BottomBanner } from '../components/bottom-banner/Banner'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import styles from './index.module.scss'

export function Sales() {
    return (
        <div className={styles.container}>
           <Header />
           <TopBanner data={{
                pageName: 'Распродажи',
                title: 'Распродажи',
                description: 'ранний доступ к распродажам в магазинах',
                button: true
           }} />
           <BottomBanner />
           <Footer />
        </div>
    )
}
