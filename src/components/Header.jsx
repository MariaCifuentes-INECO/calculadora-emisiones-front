import { Link } from "react-router-dom"
import logoIneco from "../assets/Logo-Ineco.png"
import logo from "../assets/logo_degradado.png"
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
                                    src={logoIneco || "/placeholder.svg"}
                                    alt="INECO Logo"
                                    className="img-fluid"
                                    style={{height: "41.69px", width: "191.36px"}}
                                />
                            </Link>
                        </div>
                        <div className="col-md-8 mt-md-0 text-md-end">
                            <div className="d-flex align-items-center justify-content-md-end">
                                <img
                                    src={logo || "/placeholder.svg"}
                                    alt="Icono calculadora"
                                    className="me-4"
                                    style={{height: "42px", width: "91px"}}
                                />
                                <span className="custom-text-color">Calculadora de Emisiones</span>
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
                                <Link to="/genericCase" className="nav-link custom-navbar-color">
                                    CASO GENÉRICO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/realCase" className="nav-link custom-navbar-color">
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

