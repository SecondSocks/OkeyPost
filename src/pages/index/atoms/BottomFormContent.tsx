import styles from './BottomFormContent.module.scss'

export function BottomFormContent() {
    return (
        <div className={styles.container}>
            <form action='#' method='POST'>
                <legend>Страна</legend>
                <select name="country">
                    <option value="Russia" defaultChecked>Россия</option>
                    <option value="USA">США</option>
                    <option value="France">Фрацния</option>
                    <option value="German">Германия</option>
                    <option value="Itali">Италия</option>
                    <option value="Spain">Испания</option>
                </select>
            </form>
            <form action='#' method='POST'>
                <legend>Город</legend>
                <input type='text' placeholder='Москва'></input>
            </form>
            <form action='#' method='POST'>
                <legend>Индекс</legend>
                <input type='text' placeholder='101000'></input>
            </form>
            <form action='#' method='POST'>
                <legend>Вес посылки:</legend>
                <input type='text' placeholder='0,5'></input>
            </form>
            <form action='#' method='POST'>
                <legend>Дополнительные услуги:</legend>
                <select name='services'>
                    <option value="Insurance" defaultChecked>Страховка груза</option>
                    <option value="Storage">Хранение груза</option>
                    <option value="ToDoors">Доставка до двери</option>
                    <option value="UpUnLoading">Погрузочно-разгрузочные работы</option>
                    <option value="Packing">Упаковка груза</option>
                </select>
            </form>
        </div>
    )
}
