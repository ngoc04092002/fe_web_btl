import React from 'react';

function App() {
	console.log(process.env.REACT_APP_TEST);
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='text-red-900'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
