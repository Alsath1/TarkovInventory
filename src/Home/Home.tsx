import { Link } from 'react-router-dom';
import style from './Home.module.sass';

export const Home = () => {
	return (
		<div className={style.mainPageCont}>
			<img src='./MainPng.png'></img>
			<h3>Побег из дурки</h3>
			<Link to='/inventory'>Одень алкаша</Link>
			<h3>p2p арбитраж</h3>
			<h3>Уёбище</h3>
			<h3>Сбежал из такрова</h3>
		</div>
	);
};
