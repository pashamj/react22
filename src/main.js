import styles from './app.module.css';
import data from './data.json';
import {useState} from "react";

export const Page = () => {

	const [step, setStep] = useState({data})
	const [activeIndex, setActiveIndex] = useState('')
	let steps = [1,2,3,4,5,6]
	setActiveIndex(steps)




	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles.stepsContent}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles.stepsList}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li className={styles.stepsItem + steps.map(()) + styles.done}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles.stepsItemButton}>1</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li className={styles.stepsItem + ' ' + styles.done}>
							<button className={styles.stepsItemButton}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles.stepsItem +
								' ' +
								styles.done +
								' ' +
								styles.active
							}
						>
							<button className={styles.stepsItemButton}>3</button>
							Шаг 3
						</li>
						<li className={styles.stepsItem}>
							<button className={styles.stepsItemButton}>4</button>
							Шаг 4
						</li>
					</ul>
					<div className={styles.buttonsContainer}>
						<button className={styles.button}>Назад</button>
						<button className={styles.button}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
