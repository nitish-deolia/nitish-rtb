import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bmi-calculator">BMI Calculator</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shopping-list">Shopping List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/image-carousel">Image Carousel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile-card">Profile Card</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;