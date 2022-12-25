import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const SignInPage = lazy(() => import('./components/pages/SignIn'));
const SignUpPage = lazy(() => import('./components/pages/Signup'));
const MainPage = lazy(() => import('./components/pages/MainPage'));
const AdminPage = lazy(() => import('./components/pages/AdminPanel'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={'load'}>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/main" element={<MainPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				{/* <Navigate  to="/main" /> */}
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
