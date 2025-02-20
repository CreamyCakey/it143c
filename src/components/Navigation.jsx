import React from 'react';

function Navigation() {
    return (
        <div className="header">
            <div className="logo">Dave</div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutme">About Me</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;