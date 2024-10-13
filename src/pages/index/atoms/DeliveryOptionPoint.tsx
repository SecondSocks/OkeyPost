import { IDeliveryOptionPoint } from '../types'
import styles from './DeliveryOptionPoint.module.scss'

interface Props {
    data: IDeliveryOptionPoint
}

export function DeliveryOptionPoint({data}: Props) {
    return (
        <div className={styles.container}>
           <div className={styles.variant}>
                <img src={data.logoSrc} alt="Variant Logo" />
                <h5>{data.deliveryMehtod}</h5>
           </div>
           <div className={styles.info}>
                <div>
                    <p>Сроки:</p>
                    <h6>{data.deadline}</h6>
                </div>
                <div>
                    <p>Стоимость доставки:</p>
                    <h6>от {data.cost}</h6>
                </div>
                <div>
                    <p>Итого:</p>
                    <h6>{data.result}</h6>
                </div>
           </div>
        </div>
    )
}
