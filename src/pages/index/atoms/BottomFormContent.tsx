import { useForm, type SubmitHandler } from 'react-hook-form'
import { GreenButton } from '../../components/green-button/Button'
import type { IData } from '../types'
import styles from './BottomFormContent.module.scss'

export function BottomFormContent() {
	const { register, handleSubmit, reset, formState: {errors, isSubmitted} } = useForm<IData>()

	const onSubmit: SubmitHandler<IData> = data => {
		console.log(data)
    }

	const resetForm = () => setTimeout(() => reset(), 10)

	const countryError = errors['country']?.message
	const cityError = errors['city']?.message
	const indexError = errors['index']?.message
	const weightError = errors['weight']?.message
	const serviceError = errors['services']?.message

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<fieldset>
						<legend>Страна:</legend>
						<select
							id='country'
							{...register('country', {
								required: 'Это поле обязательно',
							})}
						>
							<option disabled selected>
								Выберите страну
							</option>
							<option>Россия</option>
							<option>США</option>
							<option>Франция</option>
							<option>Германия</option>
							<option>Италия</option>
							<option>Белорусь</option>
						</select>
						{countryError && <p>{countryError}</p>}
					</fieldset>
					<fieldset>
						<legend>Город:</legend>
						<input
							type='text'
							placeholder='Москва'
							{...register('city', {
								required: 'Это поле обязательно',
								pattern: {
									value: /^[а-яА-ЯёЁa-zA-Z.-]+$/i,
									message: 'Небходимо указать название города',
								},
							})}
						/>
						{cityError && <p>{cityError}</p>}
					</fieldset>
					<fieldset>
						<legend>Индекс:</legend>
						<input
							type='text'
							placeholder='111000'
							{...register('index', {
								required: 'Это поле обязательно',
								pattern: {
									value: /^[0-9]{6}$/i,
									message: 'Необходимо указать число',
								},
							})}
						/>
						{indexError && <p>{indexError}</p>}
					</fieldset>
					<fieldset>
						<legend>Вес:</legend>
						<input
							type='text'
							placeholder='0.2'
							{...register('weight', {
								required: 'Это поле обязательно',
								pattern: {
									value: /^[0-9]+\.[0-9]$/i,
									message: 'Необходимо указать вещественное число',
								},
							})}
						/>
						{weightError && <p>{weightError}</p>}
					</fieldset>
					<fieldset>
						<legend>Услуга:</legend>
						<select
							{...register('services', {
								required: 'Это поле обязательно',
							})}
						>
							<option disabled selected>
								Выберите услугу
							</option>
							<option>Страховка груза</option>
							<option>Хранение груза</option>
							<option>Доставка до двери</option>
							<option>Погрузочно-разгрузочные работы</option>
							<option>Упаковка груза</option>
						</select>
						{serviceError && <p>{serviceError}</p>}
					</fieldset>
				</div>

				<GreenButton
					text='Рассчитать'
					width={240}
					height={66}
					type={'submit'}
					func={() => {
                        if (isSubmitted) resetForm()
                    }}
				/>
			</form>
		</div>
	)
}
