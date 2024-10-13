import { IProductSide } from '../types'
import styles from './ProductSide.module.scss'

interface Props {
    data: IProductSide
}

export function ProductLeftSide({data}: Props) {
    return (
        <div className={styles.container}>
            <h3>{data.title}</h3>
            <div className={styles.countryPrice}>
                <div className={styles.containerPrice}>
                    <img src={data.src} alt="Flag" />
                        <div className={styles.price}>
                            <p>{data.price}</p>
                            <h5>{data.cost}</h5>
                        </div>
                </div>
            </div>
        </div>
    )
}
