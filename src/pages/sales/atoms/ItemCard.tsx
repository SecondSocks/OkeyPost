import type { ICard } from '../types'
import styles from './ItemCard.module.scss'
import parse from 'html-react-parser'

interface Props {
    data: ICard
}

export function ItemCard({data}: Props) {
    return (
        <div className={styles.container}>
           <img src={data.imgSrc} alt="Goods" />
           <div className={styles.info}>
                <h3>{data.title}</h3>
                <p>{parse(data.description)}</p>
                <a href='#'>
                   <h5>{data.link}</h5>
                </a>
           </div>
        </div>
    )
}
