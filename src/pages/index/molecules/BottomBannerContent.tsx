import { useRef } from 'react'
import { GreenButton } from '../../components/green-button/Button'
import styles from './BottomBannerContent.module.scss'

export function BottomBannerContent() {
    const inputText = useRef(null)

    const setInputText = () => {
        if (!inputText.current) return
        inputText.current.value = ''
    }

    return (
        <div className={styles.container}>
           <h3>
                Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!
           </h3>
           <div className={styles.form}>
                <form>
                    <input ref={inputText} type='text' placeholder='Введите ваш E-Mail'></input>
                </form>
                <GreenButton text='Подписаться' width={240} height={66} func={setInputText}/>
           </div>
        </div>
    )
}
