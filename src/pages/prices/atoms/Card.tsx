import { BlueButton } from '../../components/blue-button/Button'
import { ICard } from '../types'
import styles from './Cards.module.scss'

interface Props {
    data: ICard
}

export function Card({data}: Props) {
    return (
        <div className={styles.container}>
            <img src={data.imgSrc} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <BlueButton text={data.buttonText}/>
        </div>
    )
}
