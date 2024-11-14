import Search from "./Search";

function Header() {
    return (
        <nav className="navbar movie-color">
            <div className="container">
                <a className="navbar-brand text-white">FinProH8</a>
                <Search />
            </div>
        </nav>
    )
}

export default Header;
