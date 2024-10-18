import { GreenButton } from '../../components/green-button/Button'
import { BritaintShoppingCard } from '../atoms/BritaintShoppingCard'
import styles from './BritainShoppingContent.module.scss'

export function BritainShoppingContent() {
    return (
        <div className={styles.container}>
           <h3>
                4 простых шага для ваших покупок в Великобритании
           </h3>
           <div className={styles.cards}>
                <BritaintShoppingCard data={{
                    src: 'britain-shopping-card1.png',
                    title: 'вы ВЫБИРАЕТЕ ТОВАР',
                    description: 'в английском магазине, оплачиваете и указываете адрес склада OkeyPost'
                }}/>
                <BritaintShoppingCard data={{
                    src: 'britain-shopping-card2.png',
                    title: 'ПОКУПКИ ПРИХОДЯТ НА СКЛАД',
                    description: 'и появляются в вашем личном кабинете на нашем сайте'
                }}/>
                <BritaintShoppingCard data={{
                    src: 'britain-shopping-card3.png',
                    title: 'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ',
                    description: 'в надежной упаковке, по выгодной цене и очень быстро'
                }}/>
                <BritaintShoppingCard data={{
                    src: 'britain-shopping-card4.png',
                    title: 'ЗАБИРАЕТЕ свою ПОСЫЛКУ',
                    description: 'в пункте выдачи, на почте или с курьером'
                }}/>
           </div>
           <p>
            Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.
           </p>
           <GreenButton text={"Быстрая покупка"} width={240} height={66} />
        </div>
    )
}
