import { Link } from "react-router-dom"
import { Button } from "../green-button/Button"
import styles from "./header.module.scss"

type TLinks = {
    key: string
    text: string
    src: string
}

export function Header() {
    const links: TLinks[] = [
        {
            key: "1",
            text: 'Как покупать',
            src: '/how-buy'
        },
        {
            key: "2",
            text: 'Распродажи',
            src: '/sales'
        },
        {
            key: "3",
            text: 'Цены',
            src: '/prices'
        },
        {
            key: "4",
            text: 'Помощь',
            src: '/help'
        },
        {
            key: "5",
            text: 'Бонусы',
            src: '/bonuses'
        },
        {
            key: "6",
            text: 'Блог',
            src: '/blog'
        },
        {
            key: "7",
            text: 'Магазины',
            src: '/shops'
        },
    ]

    return (
        <div className={styles.head}>
            <div className={styles.container}>
                <Link to='/'>
                    <img src="logo.png" alt="logo" />
                </Link>
                <div className={styles.links}>
                    {links.map(item => (
                        <Link to={item.src} key={item.key}>
                            <p>{item.text}</p>
                        </Link>
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
