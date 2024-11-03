import { useForm } from 'react-hook-form'
import type { IData } from '../types'
import styles from './BottomFormContent.module.scss'
import { GreenButton } from '../../components/green-button/Button'

export function BottomFormContent() {
	const { register, handleSubmit } = useForm<IData>()

	const onSubmit = (data: IData) => {
		console.log(data)
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <select {...register('country')}>
					<option disabled selected>
						Не выбарно
					</option>
					<option>Россия</option>
					<option>США</option>
					<option>Франция</option>
					<option>Германия</option>
					<option>Италия</option>
					<option>Белорусь</option>
				</select>
				<input type='text' placeholder='city' {...register('city')} />
				<input type='text' placeholder='index' {...register('index')} />
				<input type='text' placeholder='weight' {...register('weight')} />
				<select {...register('services')}>
					<option disabled selected>
						Не выбарно
					</option>
					<option>Страховка груза</option>
					<option>Хранение груза</option>
					<option>Доставка до двери</option>
					<option>Погрузочно-разгрузочные работы</option>
					<option>Упаковка груза</option>
				</select>
                </div>
				
				<GreenButton text='Рассчитать' width={240} height={66} type={'submit'} />
			</form>
		</div>
	)
}
