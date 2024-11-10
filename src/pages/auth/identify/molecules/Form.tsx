import { Link, useNavigate } from 'react-router-dom'
import { GreenButton } from '../../../components/green-button/Button'
import styles from './Form.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ISMS } from '../../types'

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<ISMS>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ISMS> = (data) => {
        console.log(data)
        navigate('/pass-recovery')
    }

    const smsError = errors['sms']?.message

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Код из SMS:</legend>
                    <input type="text" {...register('sms', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^[0-9]{4}$/i,
                            message: 'Неверный формат кода'
                        }
                    })} />
                    {smsError && <p>{smsError}</p>}
                </fieldset>
                <p>
                    Впомнили пароль? <Link to='/login'>Выполните вход</Link>
                </p>
                <GreenButton text={'Восстановить'} width={200} height={60} type='submit' />
            </form>
        </div>
    )
}
