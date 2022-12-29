import React, { useEffect, useState } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
// import home from '../../common/home';
import html2canvas from 'html2canvas';

import { COLORS_FILTER, TYPE_FILTER } from './data';
import './style.css';
import { API_URL } from '../../../constants';
import filt from '../../../img/filt.png';
import axios from 'axios';

const MainPage = () => {
	const [color, setColor] = useState();
	const [type, setType] = useState();
	const [menus, setMenus] = useState();

	const IMAGES_BAR = menus && menus?.filter((item) => item.isBar);
	const IMAGES_RESTAURANTS = menus && menus?.filter((item) => !item.isBar);

	const [currentBar, setCurrentBar] = useState(IMAGES_BAR && IMAGES_BAR);
	const [currentRest, setCurrentRest] = useState(IMAGES_RESTAURANTS && IMAGES_RESTAURANTS);

	const [isBarActive, setBarActive] = useState(true);

	useEffect(() => {
		const getMenus = async () => {
			const responseData = await axios
				.get(`${API_URL}/team`, { withCredentials: true })
				.then((response) => setMenus(response.data));
		};
		getMenus();
	}, []);

	useEffect(() => {
		setCurrentBar(IMAGES_BAR);
		setCurrentRest(IMAGES_RESTAURANTS);
	}, [menus]);

	const download = function (canvas) {
		const link = document.createElement('a');
		link.download = 'menu.png';
		link.href = canvas.toDataURL();
		link.click();
	};

	return (
		<>
			<main className="home__main">
				<Header />
				<div className="home__toppanel">
					<div className="filtering_btn">
						<img className="filt" src={filt} alt="d" />
						Filtering
					</div>
					<div
						className="restaurant_btn"
						onClick={() => {
							setBarActive(false);
						}}
					>
						Restaurants
					</div>
					<div
						className="bar_btn"
						onClick={() => {
							setBarActive(true);
						}}
					>
						Bars
					</div>
				</div>
				<div className="home_container">
					<div className="home__left">
						<div className="home__filter">
							<p className="filter__title">Type menu</p>
							<div className="filter__content">
								{TYPE_FILTER.map((item, index) => (
									<div className="type__wrapper">
										<div className="type__checkbox" style={{ background: type === item.type ? '#8f8f8f' : '' }}></div>
										<img
											className="type__img"
											key={index}
											src={item.img}
											onClick={() => {
												setType(item.type);
												setCurrentBar(IMAGES_BAR && IMAGES_BAR.filter((menu) => menu.typeThing === item.type));
												setCurrentRest(
													IMAGES_RESTAURANTS && IMAGES_RESTAURANTS.filter((menu) => menu.typeThing === item.type)
												);
											}}
											alt="type"
										/>
									</div>
								))}
							</div>
							<button
								className="filter__clear"
								onClick={() => {
									setType();
									setCurrentBar(IMAGES_BAR);
									setCurrentRest(IMAGES_RESTAURANTS);
								}}
							>
								Reset filtering
							</button>
						</div>
						<div className="home__filter">
							<p className="filter__title">Colors</p>
							<div className="filter__content--color">
								{COLORS_FILTER.map((item, index) => (
									<div
										className="color__box"
										style={{
											background: item.hex,
											boxShadow: color === item.name ? '0px 1px 2px 3px #ffffff inset' : '',
										}}
										onClick={() => {
											setColor(item.name);
											setCurrentBar(currentBar && currentBar.filter((menu) => menu.color === item.name));
											setCurrentRest(
												IMAGES_RESTAURANTS && IMAGES_RESTAURANTS.filter((menu) => menu.color === item.name)
											);
										}}
									></div>
								))}
							</div>
							<button
								className="filter__clear"
								onClick={() => {
									setColor();
									setCurrentBar(IMAGES_BAR);
									setCurrentRest(IMAGES_RESTAURANTS);
								}}
							>
								Reset filtering
							</button>
						</div>
					</div>
					<div className="home_right">
						{isBarActive && currentBar && currentBar.length ? (
							currentBar.map((item, index) => (
								<div className="home__wrapper">
									<img className="home__image" key={index} src={`${API_URL}/getImage/${item.avatar}`} alt="travel" />
									<div
										className="home__download"
										onClick={() => {
											html2canvas(document.querySelector('.home__image'), {
												allowTaint: true,
												useCORS: true,
											}).then((canvas) => {
												download(canvas);
											});
										}}
									>
										Download
									</div>
								</div>
							))
						) : (
							null
						)}
						{!isBarActive && currentRest && currentRest.length ? (
							currentRest.map((item, index) => (
								<div className="home__wrapper">
									<img className="home__image" key={index} src={`${API_URL}/getImage/${item.avatar}`} alt="travel" />
									<div
										className="home__download"
										onClick={() => {
											html2canvas(document.querySelector('.home__image'), {
												allowTaint: true,
												useCORS: true,
											}).then((canvas) => {
												download(canvas);
											});
										}}
									>
										Download
									</div>
								</div>
							))
						) : (
							null
						)}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default MainPage;
