import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from './views';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<Switch>
					<Route path='/'>
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
