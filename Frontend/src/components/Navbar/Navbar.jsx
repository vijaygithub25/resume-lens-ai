import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../features/auth/hooks/useAuth'
import './navbar.scss'

const Navbar = () => {
    const { user, handleLogout } = useAuth()

    return (
        <nav className="main-navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <span className="logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                    </span>
                    ResumeLens AI
                </Link>
            </div>
            <div className="navbar-actions">
                {user ? (
                    <button onClick={handleLogout} className="button secondary-button logout-btn">Logout</button>
                ) : (
                    <Link to="/login" className="button primary-button">Login</Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar
