import './app.css';
import { observer } from 'mobx-react-lite';
import appStore from './models/appStore';
import { AppBar, Container, Paper } from '@mui/material';
import Form from './pages/Form';
import Loading from './pages/Loading';
import Result from './pages/Result';

function App() {
	const { currentPage } = appStore;

	return (<>
		<AppBar
			position="absolute"
			color="default"
			elevation={1}
			sx={{ position: 'relative', }}
		>
		</AppBar>
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper variant="elevation" elevation={4} sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 }, backgroundColor: '#F5F5F5', }}>
				{
					currentPage === 'form' ? <Form /> 
						: currentPage === 'loading' ? <Loading />
						: currentPage === 'result' ? <Result />
						: <Form />
				}
			</Paper>
		</Container>
		</>
	)
}

export default observer(App);
