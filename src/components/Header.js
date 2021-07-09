//////
// dependencies/imports
//////
import { StyledHeader } from "../styles";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <StyledHeader>
            <Link to="/">
                <h1>On.Sight</h1>
            </Link>
            <h2>Earth Treks CLimbing and Fitness</h2>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/routes">
                            <div>Select a Route</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <div>Login</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <div>Signup</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <div>Logout</div>
                        </Link>
                    </li>

                </ul>
            </nav>
        </StyledHeader>
    );
}