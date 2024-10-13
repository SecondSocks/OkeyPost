import { IBritainShoppingCard } from '../types'
import styles from './BritaintShoppingCard.module.scss'

interface Props {
    data: IBritainShoppingCard
}

export function BritaintShoppingCard({data}: Props) {
    return (
        <div className={styles.container}>
           <img src={data.src} alt='Britain Shopping Advantages' />
           <div className={styles.textBlock}>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
           </div>
        </div>
    )
}
