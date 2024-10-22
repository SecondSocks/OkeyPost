import { PagesBar } from '../atoms/pagesBar'
import styles from './Bar.module.scss'

export function Bar() {
    return (
        <div className={styles.container}>
           <PagesBar />
        </div>
    )
}
