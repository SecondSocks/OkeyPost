import styles from './Banner.module.scss'

export function BottomBanner() {
    return (
        <div className={styles.container}>
           <h1>Остались вопросы? Спросите нас в соцсетях!</h1>
           <div className={styles.social}>
                <a href="httpls://wa.me/79935707913">
                    <img src="whatsapp-white.png" alt="Whatsapp" />
                </a>
                <a href="#">
                    <img src="viber-white.png" alt="Viber" />
                </a>
                <a href="sms:+79935707913">
                    <img src="sms-chat-white.png" alt="SMS" />
                </a>
           </div>
        </div>
    )
}
