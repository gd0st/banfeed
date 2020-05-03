import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export default withStyles((theme) => ({
	/* Styles applied to the root element if `variant="contained"`. */
	contained: {
		color: theme.palette.getContrastText(theme.palette.grey[300]),
		backgroundColor: theme.palette.grey[300],
		boxShadow: theme.glow.default[2],
		'&:hover': {
			backgroundColor: theme.palette.grey.A100,
			boxShadow: theme.glow.default[4],
			// Reset on touch devices, it doesn't add specificity
			'@media (hover: none)': {
				boxShadow: theme.glow.default[2],
				backgroundColor: theme.palette.grey[300],
			},
			'&$disabled': {
				backgroundColor: theme.palette.action.disabledBackground,
			},
		},
		'&$focusVisible': {
			boxShadow: theme.glow.default[6],
		},
		'&:active': {
			boxShadow: theme.glow.default[1],
		},
		'&$disabled': {
			color: theme.palette.action.disabled,
			boxShadow: theme.glow.default[0],
			backgroundColor: theme.palette.action.disabledBackground,
		},
	},
	/* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
	containedPrimary: {
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
		boxShadow: theme.glow.primary[2],
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
			boxShadow: theme.glow.primary[4],
			// Reset on touch devices, it doesn't add specificity
			'@media (hover: none)': {
				boxShadow: theme.glow.primary[2],
				backgroundColor: theme.palette.primary.main,
			},
		},
		'&$focusVisible': {
			boxShadow: theme.glow.primary[6],
		},
		'&:active': {
			boxShadow: theme.glow.primary[1],
		},
	},
	/* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
	containedSecondary: {
		color: theme.palette.secondary.contrastText,
		backgroundColor: theme.palette.secondary.main,
		boxShadow: theme.glow.secondary[2],
		'&:hover': {
			backgroundColor: theme.palette.secondary.dark,
			boxShadow: theme.glow.secondary[4],
			// Reset on touch devices, it doesn't add specificity
			'@media (hover: none)': {
				boxShadow: theme.glow.secondary[2],
				backgroundColor: theme.palette.secondary.main,
			},
		},
		'&$focusVisible': {
			boxShadow: theme.glow.secondary[6],
		},
		'&:active': {
			boxShadow: theme.glow.secondary[1],
		},
	},
	/* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
	focusVisible: {},
	/* Pseudo-class applied to the root element if `disabled={true}`. */
	disabled: {},
}))(Button);
