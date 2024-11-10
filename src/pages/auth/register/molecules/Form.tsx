import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './Form.module.scss'
import type { IRegister } from '../../types'
import { Link, useNavigate } from 'react-router-dom'
import { GreenButton } from '../../../components/green-button/Button'

export function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<IRegister>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IRegister> = (data) => {
        console.log(data)
        navigate('/')
    }

    const nameError = errors['name']?.message
    const surnameError = errors['surname']?.message
    const emailError = errors['email']?.message

    return (
        <div className={styles.container}>
           <h3>Начните совершать покупки в английских магазинах</h3>
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
                    <legend>Ваша фамилия: </legend>
                    <input type="text" {...register('surname', {
                        required: 'Это поле обязательно',
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z.-]+$/i,
                            message: 'Необходимо указать имя'
                        }
                    })}/>
                    {surnameError && <p>{surnameError}</p>}
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
                <div className={styles.confidentiality}>
                    <p>Нажимая на кнопку вы соглашаетесь с <a href="#">правилами предоставления услуг</a> и <a href="#">политикой конфиденциальности</a></p>
                </div>
                <div className={styles.action}>
                    <GreenButton text={'Получить адрес в UK'} width={210} height={60} type='submit' />
                    <p>Уже зарегестрированы?<Link to='/login'>Выполните вход</Link></p>
                </div>
           </form>
        </div>
    )
}
