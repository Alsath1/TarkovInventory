/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Grid from './grid';
import { Home } from './Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/inventory' element={<Grid />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
