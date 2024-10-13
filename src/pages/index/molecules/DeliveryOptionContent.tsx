import { DeliveryOptionPoint } from '../atoms/DeliveryOptionPoint'
import styles from './DeliveryOptionContent.module.scss'

export function DeliveryOptionContent() {
    return (
        <div className={styles.container}>
           <h3>Варианты доставки:</h3>
           <DeliveryOptionPoint data={{
                logoSrc: "russia-mail.png",
                deliveryMehtod: "почта России",
                deadline: "10-14 дней",
                cost: "£27.00",
                result: "£41.99"
           }}/>
           <DeliveryOptionPoint data={{
                logoSrc: "ems-mail.png",
                deliveryMehtod: "ems почта россии",
                deadline: "9-12 дней",
                cost: "£40.00",
                result: "£54.55"
           }}/>
           <DeliveryOptionPoint data={{
                logoSrc: "russia-mail-small-box.png",
                deliveryMehtod: "почта России мелкие пакеты",
                deadline: "10-14 дней",
                cost: "£13.00",
                result: "£90.55"
           }}/>
        </div>
    )
}
