import type { ICard } from '../types'
import styles from './Card.module.scss'

interface Props {
    data: ICard
}

export function Card({data}: Props) {
    return (
        <div className={styles.container}>
           <img src={data.imgSrc} alt='Illustration' />
           <div className={styles.info}>
                <h5>{data.title}</h5>
                <span>
                    <p>{data.date}</p>
                    <div>
                        <img src="clock-icon.png" alt="Clock Icon" />
                        <p>Читать: {data.time}</p>
                    </div>
                </span>
           </div>
        </div>
    )
}
