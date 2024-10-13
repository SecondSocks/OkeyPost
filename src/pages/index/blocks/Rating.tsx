import { RatingReviews } from '../molecules/RatingReviews'
import { RatingTop } from '../molecules/RatingTop'
import styles from './Rating.module.scss'

export function Rating() {
    return (
        <div className={styles.container}>
           <RatingTop />
           <RatingReviews />
        </div>
    )
}
