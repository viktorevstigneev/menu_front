import React, { Fragment, useCallback, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { signUp } from './utils';
import { API_URL } from '../../../constants';
import SignInImg from '../../../img/logo_big.png';
import './style.css';

const SignUp = () => {
	const [user, setUser] = useState({});

	const handleFormSubmit = useCallback((evt) => {
		evt.preventDefault();
		const formData = Object.fromEntries(new FormData(evt.target));

		signUp({ formData, setUser });
	});

	return user._id ? (
		<Navigate push to={`/main`} />
	) : (
		<Fragment>
			<h2 className="auth__title">Sign Up</h2>
			<div className="auth__block">
				<form className="auth__form" action={API_URL} method="POST" onSubmit={handleFormSubmit}>
					<label className="auth__label" htmlFor="username">
						Login
					</label>
					<input
						className="auth__input"
						name="username"
						id="username"
						placeholder="Login"
						type="text"
						required={true}
					/>
					<label className="auth__label" htmlFor="password">
						Password
					</label>
					<input
						className="auth__input"
						name="password"
						id="password"
						placeholder="Password"
						type="password"
						required={true}
					/>
					<button className="auth__button" type="submit">
						sign up
					</button>

					<Link className="auth__link" to="/signin">
						already have profile? Sign in
					</Link>
				</form>
				<img className="auth__img" src={SignInImg} alt="auth" />
			</div>
		</Fragment>
	);
};

export default SignUp;
