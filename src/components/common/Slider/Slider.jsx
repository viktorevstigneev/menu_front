import React, { useState } from 'react';
import Slider from 'react-slick';
import html2canvas from 'html2canvas';
import { API_URL } from '../../../constants';
import './style.css';

const ImageSlider = ({ data, menuCount }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: menuCount || 3,
		slidesToScroll: 1,
	};

	const download = function (canvas) {
		const link = document.createElement('a');
		link.download = 'menu.png';
		link.href = canvas.toDataURL();
		link.click();
	};

	return (
		<div className="slider">
			<Slider {...settings}>
				{data &&
					data.map((item, index) => (
						<div className="slider_wrapper">
							<img className="slider__image" key={index} src={`${API_URL}/getImage/${item.avatar}`} alt="travel" />
							<a
								className="slider__download"
								// href={`${API_URL}/getImage/${item.avatar}`}
								download
								onClick={() => {
									html2canvas(document.querySelector('.slider__image'), {
										allowTaint: true,
										useCORS: true,
									}).then((canvas) => {
										download(canvas);
									});
								}}
							>
								download
							</a>
						</div>
					))}
			</Slider>
		</div>
	);
};

export default ImageSlider;
