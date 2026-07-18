
import logo_pic from "../images/chef-claude-icon.png";

function Header() {
    return (
        <header className="header">
            <img src={logo_pic} className="logo" alt="logo" />
            <h1>My Cooking Assistant </h1>
        </header>
    )
}
export default Header