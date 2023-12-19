import { CircularProgress, } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	flex: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

function Loading() {
	const styles = useStyles();
	return (<div className={styles.flex}><CircularProgress /></div>)
}
export default Loading;