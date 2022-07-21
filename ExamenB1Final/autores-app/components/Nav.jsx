import { NavLink } from '.';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Inicio</NavLink>
                <NavLink href="/autores" className="nav-item nav-link">Autores</NavLink>
            </div>
        </nav>
    );
}