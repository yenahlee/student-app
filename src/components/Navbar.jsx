import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <Link className="home-link" to="/">Home</Link>
                <Link className="braindump-link" to="/braindump">Braindump</Link>
                <Link className="chatbot-link" to="/chatbot">Chatbot</Link>
            </div>
        </div>
    )
}