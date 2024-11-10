import { Link, useNavigate } from 'react-router-dom'
import styles from './Form.module.scss'
import { GreenButton } from '../../../components/green-button/Button'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import type { IRecovery } from '../../types'

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<IRecovery>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IRecovery> = (data) => {
        console.log(data)
        navigate('/login')
    }

    const emailError = errors['email']?.message

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Ваш Email:</legend>
                    <input type="text" {...register('email', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                            message: 'Необходимо указать Email'
                        }
                    })} />
                    {emailError && <p>{emailError}</p>}
                </fieldset>
                <p>
                    Впомнили пароль? <Link to='/login'>Выполните вход</Link>
                </p>
                <GreenButton text={'Восстановить'} width={200} height={60} type='submit' />
            </form>
        </div>
    )
}
