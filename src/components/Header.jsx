import {Link} from "react-router-dom"
import logoIneco from "../assets/logoIneco.svg"
import logoHeader from "../assets/logo_header.svg"
import "../styles/headerStyle.css"

export default function Header() {
    return (
        <header className="bg-white">
            <div className="container-fluid">
                <div className="container header-cont">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <Link to="/" className="d-inline-block">
                                <img
                                    src={logoIneco}
                                    alt="INECO Logo"
                                    className="img-fluid"
                                    style={{height: "41.69px", width: "191.36px"}}
                                />
                            </Link>
                        </div>
                        <div className="col-md-8 mt-md-0 text-md-end">
                            <div className="d-flex align-items-center justify-content-md-end">
                                <img
                                    src={logoHeader}
                                    alt="Icono calculadora"
                                    style={{height: "63px", width: "268px"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="custom-header-color w-100">
                <div className="container-fluid">
                    <div className="container nav-container">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fw-medium custom-navbar-color">
                                    INICIO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/genericCase" className="nav-link fw-medium custom-navbar-color">
                                    SIMULADOR
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/realCase" className="nav-link fw-medium custom-navbar-color">
                                    CASOS REALES
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
