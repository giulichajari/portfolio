import Link from "next/link";
const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link legacyBehavior href="">
                <a className="navbar-brand" >Mi Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link legacyBehavior href="/blog.page">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href="/github.page">
                            <a className="nav-link">GitHub</a>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
)

export default NavBar;