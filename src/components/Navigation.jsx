import React from 'react';

function Navigation() {
    return (
        <div className="header">
            <div className="logo">Dave</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/aboutme">About Me</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;