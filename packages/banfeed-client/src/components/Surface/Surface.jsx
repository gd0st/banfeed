import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const toHex = (input) => {
	input = Math.min(Math.max(input, 0), 255).toString(16);
	return '0'.repeat(2 - input.length) + input;
};

export default withStyles((theme) => ({
	root: {
		backgroundColor: (props) =>
			theme.palette.background.paper +
			(props.transparent
				? toHex(Math.max(255 - (props.elevation || 1) * 4, 160))
				: ''),
		backdropFilter: (props) =>
			props.variant !== 'outlined' &&
			props.transparent &&
			`blur(${props.elevation || 1}px)`,
	},
}))(Paper);
