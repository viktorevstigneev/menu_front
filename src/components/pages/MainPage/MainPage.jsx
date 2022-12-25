import React, { useEffect, useState } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Slider from '../../common/Slider';

import homeImg from '../../../img/mini_menu.png';
import { COLORS_FILTER, TYPE_FILTER } from './data';
import './style.css';
import { API_URL } from '../../../constants';
import axios from 'axios';

const MainPage = () => {
	const [color, setColor] = useState();
	const [type, setType] = useState();
	const [menus, setMenus] = useState();
	console.log('menus: ', menus);
	const IMAGES_BAR = menus && menus?.filter((item) => item.isBar);
	const IMAGES_RESTAURANTS = menus && menus?.filter((item) => !item.isBar);

	useEffect(() => {
		const getMenus = async () => {
			const responseData = await axios
				.get(`${API_URL}/team`, { withCredentials: true })
				.then((response) => setMenus(response.data));
		};
		getMenus();
	}, []);

	let filteredMenuRest = IMAGES_RESTAURANTS && IMAGES_RESTAURANTS.filter(
		(item) => item.color === color || item.type === type || color === 'all'
	);
	console.log('filteredMenuRest: ', filteredMenuRest);
	let filteredMenuBar = IMAGES_BAR && IMAGES_BAR.filter((item) => item.type === type || item.color === color);
	console.log('filteredMenuBar: ', filteredMenuBar);

	return (
		<>
			<div className="home">
				<Header />
				<img className="home__img" src={homeImg} alt="" />
			</div>
			<main className="home__main">
				<div className="home_container">
					<div className="home__top">
						<div className="dropdown">
							<button className="dropbtn">Colors</button>
							<div className="dropdown-content">
								<p className="filter__title">Colors</p>
								<div className="colors__content">
									<div
										className="clear"
										onClick={() => {
											setColor();
										}}
									>
										&times;
									</div>
									{COLORS_FILTER.map((color) => (
										<div
											className="color__item"
											key={color.name}
											onClick={() => {
												setColor(color.name);
											}}
											style={{ background: color.hex }}
										></div>
									))}
								</div>
							</div>
						</div>
						<div className="dropdown">
							<button className="dropbtn">Menu type</button>
							<div className="dropdown-content">
								<p className="filter">filter by type</p>
								<div className="type__content">
									<div
										className="clear"
										onClick={() => {
											setType();
										}}
									>
										&times;
									</div>
									{TYPE_FILTER.map((item, index) => (
										<img
											className="type__img"
											key={index}
											src={item.img}
											onClick={() => {
												setType(item.type);
											}}
											alt="type"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Slider
					data={filteredMenuRest && filteredMenuRest.length ? filteredMenuRest : IMAGES_RESTAURANTS}
					menuCount={filteredMenuRest && filteredMenuRest.length}
				/>
				<Slider
					data={filteredMenuBar && filteredMenuBar.length ? filteredMenuBar : IMAGES_BAR}
					menuCount={filteredMenuRest && filteredMenuBar.length}
				/>
			</main>
			<Footer />
		</>
	);
};

export default MainPage;
