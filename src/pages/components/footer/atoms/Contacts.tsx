import styles from './Contacts.module.scss'

export function Contacts() {
    return (
        <div className={styles.container}>
           <img src="logo.png" alt="Logo" />
           <div className={styles.contacts}>
                <a href="httpls://wa.me/79935707913">
                    <img src="whatsapp.png" alt="Whatsapp" />
                </a>
                <a href="#">
                    <img src="viber.png" alt="Viber" />
                </a>
                <a href="sms:+79935707913">
                    <img src="sms-chat.png" alt="Chat" />
                </a>
           </div>
        </div>
    )
}
