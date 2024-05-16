import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { isAuthenticated } from '../auth';

const isAuthenticated = () => true;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation();

	// Redirect to login if not authenticated and trying to access a protected route
	if (!isAuthenticated() && location.pathname !== '/login') {
		return <Navigate to='/login' replace />;
	}

	// Otherwise, render the children (which could be your protected route)
	return <>{children}</>;
};

export default Layout;
