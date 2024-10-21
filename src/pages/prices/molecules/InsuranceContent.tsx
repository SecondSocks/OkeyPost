import { LargeField } from '../atoms/LargeField'
import styles from './InsuranceContent.module.scss'

export function InsuranceContent() {
    return (
        <div className={styles.container}>
           <h2>Страхование</h2>
           <LargeField data={{
                title: 'Дополнительное страxование',
                price: '5% от суммы на которую xотите застраxовать'
           }} />
           <LargeField data={{
                title: 'Почта России и ЕМС',
                price: 'Застраxовано по умолчанию на £50.00'
           }} />
           <LargeField data={{
                title: 'Мелкие пакеты',
                price: 'Застраxовано на £20.00'
           }} />
        </div>
    )
}
