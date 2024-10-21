import { BottomBanner } from '../components/bottom-banner/Banner'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import { DeliveryOption } from '../index/blocks/DeliveryOption'
import { Additionally } from './blocks/Additionally'
import { Banner } from './blocks/Banner'
import { BuyWithOP } from './blocks/BuyWithOP'
import { Calculate } from './blocks/Calculate'
import { Features } from './blocks/Features'
import { Insurance } from './blocks/Insurance'
import { WarehouseServices } from './blocks/WarehouseServices'
import styles from './index.module.scss'

export function Prices() {
    return (
        <div className={styles.container}>
           <Header />
           <TopBanner data={{
                pageName: 'Цены',
                title: 'Услуги доставки из Великобритании',
                button: false
           }} />
           <Features />
           <Calculate />
           <DeliveryOption />
           <WarehouseServices />
           <BuyWithOP />
           <Banner />
           <Insurance />
           <Additionally />
           <BottomBanner />
           <Footer />
        </div>
    )
}
