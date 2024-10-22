import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import { Banner } from './blocks/Banner'
import { Main } from './blocks/Main'
import styles from './index.module.scss'

export function Bonuses() {
    return (
        <div className={styles.container}>
           <Header  />
           <TopBanner data={{
                pageName: 'Бонусы и партернская программа',
                title: 'Бонусы и партнёрская программа',
                description: 'Платим $3 с каждой отправленной посылки',
                button: true
           }} />
           <Main />
           <Banner />
           <Footer />
        </div>
    )
}
