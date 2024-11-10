import { Link, useNavigate } from 'react-router-dom'
import styles from './Form.module.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { ILogin } from '../../types'
import { GreenButton } from '../../../components/green-button/Button'
import { Social } from '../atoms/Social'

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<ILogin>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        console.log(data)
        navigate('/')
    }

    const nameError = errors['name']?.message
    const emailError = errors['email']?.message
    const passwordError = errors['password']?.message

    return (
        <div className={styles.container}>
            <h3>Выполните вход в ваш личный кабинет</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Ваше имя:</legend>
                    <input type="text" {...register('name', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z.-]+$/i,
                            message: 'Необходимо указать имя'
                        }
                    })}/>
                    {nameError && <p>{nameError}</p>}
                </fieldset>
                <fieldset>
                    <legend>Ваш Email:</legend>
                    <input type="text" {...register('email', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                            message: 'Необходимо указать Email'
                        }
                    })}/>
                    {emailError && <p>{emailError}</p>}
                </fieldset>
                <fieldset>
                    <legend>Ваш пароль</legend>
                    <input type="text" {...register('password', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
                            message: 'Пароль должен 6 символов содежать: A-Z, a-z, 0-9 и спец. символ'
                        }
                    })}/>
                    {passwordError && <p>{passwordError}</p>}
                </fieldset>
                <p>
                    <Link to="/identify">Восстановление пароля</Link> или <Link to="/register">быстрая регистрация</Link>
                </p>
                <div className={styles.social}>
                    <GreenButton text='Войти' width={200} height={60} type='submit' />
                    <Social />
                </div>
           </form>
        </div>
    )
}
