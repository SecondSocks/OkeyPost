import { BottomBanner } from '../components/bottom-banner/Banner'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import { Main } from './blocks/Main'
import styles from './index.module.scss'

export function Blog() {
    return (
        <div className={styles.container}>
            <Header />
            <TopBanner data={{
                pageName: 'Блог',
                title: 'Блог',
                button: false
            }} />
            <Main />
            <BottomBanner />
            <Footer />
        </div>
    )
}
