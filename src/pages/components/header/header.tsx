import { Button } from "../green-button/Button"
import styles from "./header.module.scss"

type TLinks = {
    key: string
    text: string
    src: string
}

export function Header() {
    const links: TLinks = [
        {
            key: "1",
            text: 'Как покупать',
            src: '#'
        },
        {
            key: "2",
            text: 'Распродажи',
            src: '#'
        },
        {
            key: "3",
            text: 'Цены',
            src: '#'
        },
        {
            key: "4",
            text: 'Помощь',
            src: '#'
        },
        {
            key: "5",
            text: 'Бонусы',
            src: '#'
        },
        {
            key: "6",
            text: 'Блог',
            src: '#'
        },
        {
            key: "7",
            text: 'Магазины',
            src: '#'
        },
    ]

    return (
        <div className={styles.head}>
            <div className={styles.container}>
                <img src="logo.png" alt="logo" />
                <div className={styles.links}>
                    {links.map(item => (
                        <a href={item.src} key={item.key}>
                            <p>{item.text}</p>
                        </a>
                    ))}
                </div>
                <div className={styles.auth}>
                    <div className={styles.login}>
                        <img src="user.png" alt="User" />
                        <a href="#">
                            <p>Вход</p>
                        </a>
                    </div>
                    <Button text={"Связаться с нами"} width={170} height={48} />
                </div>
            </div>
        </div>
    )
}
