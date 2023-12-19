import { Alert, Button, FormLabel, Grid, Typography } from '@mui/material';
import VTextField from '../components/VTextField';
import { makeStyles } from '@mui/styles';
import appStore from '../models/appStore';
import { observer } from 'mobx-react-lite';
import VTooltip from '../components/VTooltip';

const useStyles = makeStyles(() => ({
	formContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 12,
	},
	flex: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
}))

function Form() {
	const {
		form: {
			Pregnancies,
			setPregnancies,
			Glucose,
			setGlucose,
			BloodPressure,
			setBloodPressure,
			SkinThickness, 
			setSkinThickness, 
			Insulin, 
			setInsulin, 
			BMI, 
			setBMI, 
			DiabetesPedigreeFunction, 
			setDiabetesPedigreeFunction, 
			Age, 
			setAge,
		},
		sendData, } = appStore;

	const styles = useStyles();

  return (
		<div className={styles.formContent}>
			<Typography variant="body1" align="center" fontSize={18}>
				Заполните форму
			</Typography>
			<Alert severity="info">
				Если вы не знаете, что-то из необходимой информации для прохождения теста,
				нажмите кнопу "авто", чтобы автоматически подставить нормальное значение выбранного параметра
			</Alert>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<FormLabel width="100%">Возраст:</FormLabel>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={Age} setState={setAge}/>
				</Grid>
			</Grid>	

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<FormLabel>Колличество беременностей:</FormLabel>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={Pregnancies} setState={setPregnancies} min={0}/>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<FormLabel>Функция родословной диабета:</FormLabel>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField 
						state={DiabetesPedigreeFunction * 100} 
						setState={setDiabetesPedigreeFunction}
					/>
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setDiabetesPedigreeFunction(0)}>авто</Button>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<div className={styles.flex}>
						<FormLabel>Глюкоза:</FormLabel>
						<VTooltip title="Концентрация глюкозы в плазме через 2 часа при пероральном тесте на толерантность к глюкозе. (мг/дл)" />
					</div>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={Glucose} setState={setGlucose} />
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setGlucose(140)}>авто</Button>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<div className={styles.flex}>
						<FormLabel>Артериальное давление:</FormLabel>
						<VTooltip title="Диастолическое артериальное давление (мм рт. ст.)." />
					</div>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={BloodPressure} setState={setBloodPressure} />
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setBloodPressure(83)}>авто</Button>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<div className={styles.flex}>
						<FormLabel>Толщина кожи:</FormLabel>
						<VTooltip title="Толщина кожной складки трицепса (мм)." />
					</div>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={SkinThickness} setState={setSkinThickness} />
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setSkinThickness(20)}>авто</Button>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<div className={styles.flex}>
						<FormLabel>Инсулин:</FormLabel>
						<VTooltip title="2-часовой сывороточный инсулин (мю Ед/мл)." />
					</div>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={Insulin} setState={setInsulin} />
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setInsulin(176)}>авто</Button>
				</Grid>
			</Grid>

			<Grid container alignItems="center"> 
				<Grid item xs={6}>
					<div className={styles.flex}>
						<FormLabel>ИМТ:</FormLabel>
						<VTooltip title="Индекс массы тела (вес в кг/(рост в м)^2)." />
					</div>
				</Grid>
				<Grid item xs={4.5}>
					<VTextField state={BMI} setState={setBMI} />
				</Grid>
				<Grid item xs={1}>
					<Button variant='text' size='small' onClick={() => setBMI(21.7)}>авто</Button>
				</Grid>
			</Grid>

			<Button variant='contained' onClick={sendData}>Отправить</Button>
		</div>
  );
}
export default observer(Form);