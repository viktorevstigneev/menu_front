import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../img/logo_mini.png';
import './style.css';

const Header = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<img className="footer__logo" src={logo} alt="" />

				<div className="footer_wrapper">
					<a className="footer__link" href="tel:+375294675973">
						+375294675973
					</a>
					<a className="footer__link" href="tel:80294675973">
						80294675973
					</a>
				</div>
				<a className="footer__link" href="mailto:menyu_servis@mail.ru">
					menyu_servis@mail.ru
				</a>
			</div>
		</footer>
	);
};

export default Header;
