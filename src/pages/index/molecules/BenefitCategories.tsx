import styles from './BenefitCategories.module.scss'

export function Categories() {
    const categories = [
        {
            key: "1",
            src: "outfit-icon.png",
            text: "Одежда"
        },
        {
            key: "2",
            src: "electronics-icon.png",
            text: "Электроника"
        },
        {
            key: "3",
            src: "accessories-icon.png",
            text: "Аксессуары"
        },
        {
            key: "4",
            src: "kids-merch-icon.png",
            text: "Для детей"
        },
        {
            key: "5",
            src: "sport-merch-icon.png",
            text: "Для спорта"
        },
        {
            key: "6",
            src: "cosmetics-icon.png",
            text: "Косметика"
        }
    ]
    
    return (
        <div className={styles.container}>
            <img src="green-arrow.png" alt="Green Arrow" />
            {categories.map(item => (
                <div key={item.key}>
                    <img src={item.src} alt='Category Image' />
                    <p>{item.text}</p>
                </div>
            ))}
            <img src="green-arrow.png" alt="Green Arrow" className={styles.rotatedArrow} />
        </div>
    )
}
