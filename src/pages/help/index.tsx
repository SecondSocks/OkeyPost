import { BottomBanner } from '../components/bottom-banner/Banner'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import { Main } from './blocks/Main'
import { Query } from './blocks/Query'
import styles from './index.module.scss'

export function Help() {
    return (
        <div className={styles.container}>
           <Header />
           <TopBanner data={{
                pageName: 'Часто задаваемые вопросы',
                title: 'Отвечаем на вопросы доставки',
                button: false
           }}/>
           <Query />
           <Main />
           <BottomBanner />
           <Footer />
        </div>
    )
}
