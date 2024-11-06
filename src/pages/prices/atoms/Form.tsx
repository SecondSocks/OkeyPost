import { useForm, type SubmitHandler } from 'react-hook-form'
import { GreenButton } from '../../components/green-button/Button'
import styles from './Form.module.scss'
import type { IUrl } from '../types'

export function Form() {
    const {register, handleSubmit, formState: {errors, isSubmitted}, reset, } = useForm<IUrl>()

    const formReset = () => {
        setTimeout(() => {
            reset()
        }, 10);
    }

    const onSubmit: SubmitHandler<IUrl> = (data) => {
        console.log(data)
    }

    const urlError = errors['url']?.message

    return (
        <div className={styles.container}>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Введите ссылку на товар' {...register('url', {
                    required: 'Это поле обязательно',
                    pattern: {
                        value: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i,
                        message: 'Необходимо указать ссылку'
                    }
                })} />
                {urlError && <p>{urlError}</p>}
                <div className={styles.submit}>
                    <GreenButton text={'Отправить'} width={240} height={66} type='submit' func={() => {
                        if (isSubmitted) formReset()
                    }}/>
                    <p>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</p>
                </div>
           </form>
        </div>
    )
}
