import styles from './BenefitAdvantages.module.scss'

export function Advantages() {
    const advantages = [
        {
            key: "1",
            src: "calc-icon.png",
            text: "Экономия до 70%"
        },
        {
            key: "2",
            src: "doc-icon.png",
            text: "Только подлинная продукция"
        },
        {
            key: "3",
            src: "delivery-icon.png",
            text: "Оперативная доставка"
        },
        {
            key: "4",
            src: "shop-icon.png",
            text: "Огромный выбор товаров"
        }
    ]

    return (
        <div className={styles.container}>
           {advantages.map(item => (
                <div key={item.key}>
                    <img src={item.src} alt="Advantages" />
                    <h5>{item.text}</h5>
                </div>
            ))}
        </div>
    )
}
