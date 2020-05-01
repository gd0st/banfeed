import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import React from 'react';
import logo from './logo.svg';

// const localStorage = window.localStorage;

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<div className='App'>
						<header className='App-header'>
							<img src={logo} className='App-logo' alt='logo' />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
								className='App-link'
								href='https://reactjs.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								Learn React
							</a>
						</header>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
