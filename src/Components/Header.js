import React from 'react'

const Header = () => {
    return (
        <nav className="nav">
            <ul className="nav__links">
                <li>
                    <a href="/" className="nav__title">VertBase</a>
                </li>
                <li>
                    <a href="/exchange" className="nav__route">Exchange</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header
