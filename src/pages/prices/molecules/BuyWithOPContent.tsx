import { LargeField } from '../atoms/LargeField'
import styles from './BuyWithOPContent.module.scss'

export function ButWithOPContent() {
    return (
        <div className={styles.container}>
           <h2>
                Покупки с операторами Okeypost.com
           </h2>
           <LargeField data={{
                title: 'Быстрое оформление покупок в интернет-магазинах',
                description: 'Вы присылаете ссылки, а оформлением заказов занимаются операторы "Почтой.ком". Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.',
                price: '5% от стоимости товаров минимум £7 для каждого магазина. Но не менее £7 для каждого лота eBay'
           }} />
           <LargeField data={{
                title: 'Фото товара по услуге "Покупка с операторами"',
                description: 'Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"',
                price: '£2'
           }} />
        </div>
    )
}
