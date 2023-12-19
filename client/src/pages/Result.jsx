import { Alert, Button, Typography } from '@mui/material';
import appStore from '../models/appStore';
import { makeStyles } from '@mui/styles';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles(() => ({
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 12,
	},
}))


function Result() {
	const {
		 result: { data: { result, score } },
		 openFormPage,
		} = appStore;

	const styles = useStyles();

  return (
		<div className={styles.content}>
			<Typography>
				{result ? 'Возможно у вас диабет, рекомендую обратиться к врачу' : 'Признаки диабета не обнаружены'}
			</Typography>
			<Alert severity="warning">Точность этого теста {(score * 100).toFixed(2)}%</Alert>
			<Button variant='contained' onClick={openFormPage}>Пройти ещё раз</Button>
		</div>
  );
}
export default observer(Result);