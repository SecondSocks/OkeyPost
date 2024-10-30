import { BottomBanner } from '../components/bottom-banner/Banner'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import { Brands } from './blocks/Brands'
import styles from './index.module.scss'

export function Shops() {
    return (
        <div className={styles.container}>
           <Header />
           <TopBanner data={{
                pageName: 'Популярные магазины',
                title: 'Популярные магазины',
                button: false
           }} />
           <Brands />
           <BottomBanner />
           <Footer />
        </div>
    )
}
