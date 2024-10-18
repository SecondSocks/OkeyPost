import { FeaturesContent } from '../molecules/FeaturesContent'
import styles from './Features.module.scss'

export function Features() {
    return (
        <div className={styles.container}>
           <FeaturesContent />
        </div>
    )
}
