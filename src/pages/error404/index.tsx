import { Header } from '../components/header/header'
import { TopBanner } from '../components/top-banner/Banner'
import styles from './index.module.scss'

export function Error404() {
    return (
        <div className={styles.container}>
           <Header />
           <TopBanner data={{
                pageName: 'Ошибка 404',
                title: '404 Not Found',
                button: false
           }} />
        </div>
    )
}
