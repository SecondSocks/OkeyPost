import { MainContent } from '../molecules/MainContent'
import styles from './Main.module.scss'

export function Main() {
    return (
        <div className={styles.container}>
           <MainContent />
        </div>
    )
}
