import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const ItemType = 'GRID_ITEM';

const GridItem = ({ item, index }) => {
	const [{ isDragging }, drag] = useDrag({
		type: ItemType,
		item: { index }, // Мы передаем индекс элемента, который перетаскиваем
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<div
			ref={drag}
			className='grid-item'
			style={{
				opacity: isDragging ? 0.5 : 1
			}}
		>
			{item.content}
		</div>
	);
};

const GridCell = ({ item, index, moveItem }) => {
	const [, drop] = useDrop({
		accept: ItemType,
		drop: draggedItem => {
			moveItem(draggedItem.index, index); // Перемещаем элемент
		}
	});

	return (
		<div ref={drop} className='grid-cell'>
			{item ? <GridItem item={item} index={index} /> : null}
		</div>
	);
};

const Grid = () => {
	const gridSize = 5; // Сетка 5x5
	const [grid, setGrid] = useState([
		{ id: 1, content: 'Item 1' },
		{ id: 2, content: 'Item 2' },
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const moveItem = (fromIndex, toIndex) => {
		if (grid[toIndex]) return; // Если ячейка занята, запрещаем перемещение

		const updatedGrid = [...grid];
		updatedGrid[toIndex] = grid[fromIndex];
		updatedGrid[fromIndex] = null;
		setGrid(updatedGrid);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='grid'>
				{grid.map((item, index) => (
					<GridCell key={index} item={item} index={index} moveItem={moveItem} />
				))}
			</div>
		</DndProvider>
	);
};

export default Grid;
