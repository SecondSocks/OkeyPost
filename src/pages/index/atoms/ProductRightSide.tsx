import { IProductRightSide } from '../types'
import styles from './ProductSide.module.scss'

interface Props {
    data: IProductRightSide
}

export function ProductRightSide({data}: Props) {
    return (
        <div className={styles.container}>
            <h3>{data.title} <span className={styles.anotherColor}>{data.anotherColor}</span></h3>
            <div className={styles.countryPrice}>
                <div className={styles.containerPrice}>
                    <img src={data.src} alt="Flag" />
                        <div className={styles.price}>
                            <p>{data.price}</p>
                            <h5><span className={styles.anotherColor}>{data.cost}</span></h5>
                        </div>
                </div>
            </div>
        </div>
    )
}
