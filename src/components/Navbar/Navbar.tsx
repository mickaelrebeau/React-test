import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={ ({isActive}) => isActive ? "nav-active" : "" }>Home</NavLink>
            <NavLink to="/blog" className={ ({isActive}) => isActive ? "nav-active" : "" }>Blog</NavLink>
            <NavLink to="/article" className={ ({isActive}) => isActive ? "nav-active" : "" }>Article</NavLink>
            <NavLink to="/message" className={ ({isActive}) => isActive ? "nav-active" : "" }>Message</NavLink>
        </nav>
    )
}

// <NavLink to="/contact" className={ ({isActive}) => isActive ? "nav-active" : "" }>Contact</NavLink>