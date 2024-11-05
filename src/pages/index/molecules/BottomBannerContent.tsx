import { useForm, type SubmitHandler } from 'react-hook-form'
import { GreenButton } from '../../components/green-button/Button'
import type { IBannerForm } from '../types'
import styles from './BottomBannerContent.module.scss'

export function BottomBannerContent() {
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IBannerForm>()

	const onSubmit: SubmitHandler<IBannerForm> = (data) => {
		console.log(data)
	}

    const resetForm = () => {
        setTimeout(() => reset(), 10)
    }

    const emailError = errors['email']?.message

	return (
		<div className={styles.container}>
			<h3>
				Подпишитеть и будьте в курсе всех скидок и акций магазинов
				Великобритании!
			</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<input
						type='text'
						placeholder='Введите ваш E-Mail'
						{...register('email', {
							required: 'Это поле обязательно',
							pattern: {
								value:
									/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
								message: 'Необходимо указать E-Mail',
							},
						})}
					/>
                    {emailError && <p>{emailError}</p>}
				</fieldset>
				<GreenButton text='Подписаться' width={240} height={66} type='submit' func={resetForm}/>
			</form>
		</div>
	)
}
