import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../img/logo_mini.png';

import PhoneImg from '../../../img/phone_img.png';
import AdminImg from '../../../img/admin_img.png';
import MailImg from '../../../img/mail_img.png';
import HomeImg from '../../../img/home_img.png';
import LogoutImg from '../../../img/logout_img.png';

import './style.css';
import axios from 'axios';
import { API_URL } from '../../../constants';

const Header = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);
	return (
		<header className="header">
			<div className="header__container">
				<img className="header__logo" src={logo} alt="logo" />
				<nav className="header__nav">
					<Link className="header__link" to="/main">
						<img className="header__icon" src={PhoneImg} alt="phone" />
					</Link>
					<Link className="header__link" to="/contact">
						<img className="header__icon" src={MailImg} alt="phone" />
					</Link>
					<Link className="header__link" to="/main">
						<img className="header__icon" src={HomeImg} alt="phone" />
					</Link>
					{user && user.isAdmin ?
					<Link className="header__link" to="/admin">
						<img className="header__icon" src={AdminImg} alt="phone" />
					</Link> : null}
					<Link
						className="header__link"
						to="/signin"
						onClick={(evt) => {
							axios.post(`${API_URL}/logout`);
						}}
					>
						<img className="header__icon" src={LogoutImg} alt="phone" />
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
