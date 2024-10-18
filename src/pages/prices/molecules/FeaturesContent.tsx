import { Card } from '../atoms/Card'
import styles from './FeaturesContent.module.scss'

export function FeaturesContent() {
    const cardContents = [
        {
            imgSrc: 'price-feature1.png',
            title: 'Ваш личный адрес для покупок',
            description: 'на нашем современном автоматизированном складе в безналоговом Делавэре',
            buttonText: 'Бесплатно'
        },
        {
            imgSrc: 'price-feature2.png',
            title: 'Объединение нескольких посылок в одну',
            description: 'ведь часто отправлять несколько посылок в одной коробке гораздо выгоднее, чем по одной',
            buttonText: 'от £10.00'
        },
        {
            imgSrc: 'price-feature3.png',
            title: 'Усиленная упаковка по запросу',
            description: 'Мы дополнительно упакуем вашу посылку в пленку, коробку с двойными стенками.',
            buttonText: 'от £0.25'
        },
        {
            imgSrc: 'price-feature4.png',
            title: 'Хранение входящих посылок 30 дней',
            description: 'чем больше срок хранения посылок на складе – тем больше вы сможете собрать',
            buttonText: 'Бесплатно'
        }
    ]

    return (
        <div className={styles.container}>
            {cardContents.map(item => (
                <Card data={{
                    imgSrc: item.imgSrc,
                    title: item.title,
                    description: item.description,
                    buttonText: item.buttonText
                }} key={item.title} />
            ))}
        </div>
    )
}
