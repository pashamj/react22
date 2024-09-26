import styles from './app.module.css';
import data from './data.json';
import {useState} from "react";

export const Page = () => {

	const [step, setStep] = useState({data})
	const [activeIndex, setActiveIndex] = useState(0)
	let steps = [0,1,2,3]

	const isFirstStep = 0
	const isLastStep = 3

	const handleNext = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			// Логика для "Начать сначала"
			setActiveIndex(0);
		}
	};

	const handleBack = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};
	const handleReset = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles.stepsContent}>
						{`Контент соответственный шагу. Сейчас активен шаг ${activeIndex + 1}`}
					</div>
					<ul className={styles.stepsList}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li className={styles.stepsItem + ' ' + styles.done}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles.stepsItemButton} >1</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li className={styles.stepsItem + '   ' + styles.done}>
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
						<button  styles={styles.button} onClick={handleNext} disabled={activeIndex === 0}>Назад</button>
						<button onClick={handleBack}>{activeIndex === steps.length-1 ? "Начать сначала" : "Далеее"}</button>
					</div>
				</div>
			</div>
		</div>
	);
};
