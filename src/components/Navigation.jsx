import React from 'react';

function Navigation() {
    return (
        <div className="header">
            <div className="logo">Dave</div>
            <nav className="nav">
                <ul>
                    <li><a Link to="/">Home</a></li>
                    <li><a Link to="/aboutme">About Me</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;