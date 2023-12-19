import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
	info_icon: {
		margin: '0 8px',
		width: 20,
		height: 20,
		borderRadius: '50%',
		backgroundColor: '#AAAAAA',
		opacity: 0.5,
		color: '#FFFFFF',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			opacity: 0.8,
		},
	},
}));

function VTooltip({title}) {
	const styles = useStyles();
	return (
		<Tooltip title={title} placement="top">
			<div className={styles.info_icon}>?</div>
		</Tooltip>
		)
};
export default VTooltip;