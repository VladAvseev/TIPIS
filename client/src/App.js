import { useState } from 'react';
import './app.css';
import { Button, CircularProgress, Tooltip } from '@mui/material';
import VTextField from './components/VTextField';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles(({theme}) => ({
	form: {
		margin: '100px auto 0',
		width: 600,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		border: '2px solid #2979ff',
		padding: 10,
	},
	formContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 12,
	},
	loader: {
		position: 'absolute',
		left: '50%',
		margin: '300px 0 0 0',
	},
}))

function App() {
	const [Pregnancies, setPregnancies] = useState(0);
	const [Glucose, setGlucose] = useState(0);
	const [BloodPressure, setBloodPressure] = useState(0);
	const [SkinThickness, setSkinThickness] = useState(0);
	const [Insulin, setInsulin] = useState(0);
	const [BMI, setBMI] = useState(0);
	const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);
	const [Age, setAge] = useState(0);

	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState(null);

	const sendButtonClickHandler = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post('http://localhost:8000', {
				Pregnancies,
				Glucose,
				BloodPressure,
				SkinThickness,
				Insulin,
				BMI,
				DiabetesPedigreeFunction,
				Age,
			})
			setResult(data);
		} catch {
			console.log('error');
		} finally {
			setIsLoading(false);
		}
	};

	const returnButtonClickHandler = () => {
		setResult(null);
	}

	const styles = useStyles();

  return (
    <div>
			{isLoading 
				? <CircularProgress className={styles.loader}/>
				: result 
					? <div className={styles.form}>
							<div className={styles.formContent}>
								У вас {result.value ? 'есть диабет' : 'нет диабета'} с вероятностью {(result.score * 100).toFixed(2)}%
								<Button variant='contained' onClick={returnButtonClickHandler}>Пройти тест ещё раз</Button>
							</div>
						</div>
					:	<div className={styles.form}>
							<div className={styles.formContent}>
								<h1>Тест на диабет</h1>
								<div className="flex">
									<div className="flex label">
										<label>Беременность:</label>
										<Tooltip title="Количество беременностей." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={Pregnancies} setState={setPregnancies} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Глюкоза:</label>
										<Tooltip title="Концентрация глюкозы в плазме через 2 часа при пероральном тесте на толерантность к глюкозе." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={Glucose} setState={setGlucose} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Артериальное давление:</label>
										<Tooltip title="Диастолическое артериальное давление (мм рт. ст.)." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={BloodPressure} setState={setBloodPressure} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Толщина кожи:</label>
										<Tooltip title="Толщина кожной складки трицепса (мм)." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={SkinThickness} setState={setSkinThickness} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Инсулин:</label>
										<Tooltip title="2-часовой сывороточный инсулин (мю Ед/мл)." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={Insulin} setState={setInsulin} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>ИМТ:</label>
										<Tooltip title="Индекс массы тела (вес в кг/(рост в м)^2)." placement="top">
											<div className="info_icon">?</div>
										</Tooltip>
									</div>
									<VTextField state={BMI} setState={setBMI} />
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Функция родословной диабета:</label>
									</div>
									<VTextField 
										state={DiabetesPedigreeFunction} 
										setState={setDiabetesPedigreeFunction} 
									/>
								</div>

								<div className="flex">
									<div className="flex label">
										<label>Возраст:</label>
									</div>
									<VTextField state={Age} setState={setAge} />
								</div>	

								<Button variant='contained' onClick={sendButtonClickHandler}>Отправить</Button>
							</div>
						</div>
			}
    </div>
  );
}

export default App;
