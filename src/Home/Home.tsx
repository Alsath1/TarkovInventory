import { Link } from 'react-router-dom';
import style from './Home.module.sass';
import { useState } from 'react';

export const Home = () => {
	const [Xmove, setXmove] = useState(0);
	const [Ymove, setYmove] = useState(0);

	document.addEventListener('mousemove', (e: any) => {
		setXmove(e.pageX);
		setYmove(e.pageY);
	});

	return (
		<div className={style.mainPageCont}>
			<div className={style.layers}>
				<div
					className={style.layersCont}
					style={{
						transform: `rotateX(${
							(Ymove - window.innerWidth / 2) * -0.01
						}deg) rotateY(${(Xmove - window.innerHeight / 2) * -0.01}deg) `
					}}
				>
					<img className={style.layers1} src='./MainPng.png'></img>
					{/* <h3>Побег из дурки</h3>
					<Link to='/inventory'>Одень алкаша</Link>
					<h3>p2p арбитраж</h3>
					<h3>Уёбище</h3>
					<h3>Сбежал из такрова</h3> */}
				</div>
			</div>
		</div>
	);
};
