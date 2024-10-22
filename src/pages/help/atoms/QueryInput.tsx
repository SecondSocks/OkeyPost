import styles from './QueryInput.module.scss'

export function QueryInput() {
    return (
        <div className={styles.container}>
           <form>
                <legend>Поиск в вопросах и ответах:</legend>
                <input type='text' placeholder='Введите свой запрос' />
           </form>
        </div>
    )
}
