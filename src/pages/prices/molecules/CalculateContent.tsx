import { GreenButton } from '../../components/green-button/Button'
import { BottomFormContent } from '../../index/atoms/BottomFormContent'
import styles from './CalculateContent.module.scss'

export function CalculateContent() {
    return (
        <div className={styles.container}>
           <h2>Онлайн-калькулятор стоимости доставки товара</h2>
           <p>Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии.</p>
           <BottomFormContent />
        </div>
    )
}
