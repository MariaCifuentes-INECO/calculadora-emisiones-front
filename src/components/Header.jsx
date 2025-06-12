import {Link} from "react-router-dom"
import logoIneco from "../assets/logoIneco.svg"
import logoHeader from "../assets/logo_header.svg"
import "../styles/headerStyle.css"
import {useTranslation} from "react-i18next";

export default function Header() {

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const { t } = useTranslation('header');

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
                                    src={logoHeader || "/placeholder.svg"}
                                    alt="Icono calculadora"
                                    style={{height: "63px", width: "268px"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="custom-header-color w-100 header-gradient-effect">
                <div className="container-fluid">
                    <div className="container nav-container">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fw-medium custom-navbar-color">
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/genericCase" className="nav-link fw-medium custom-navbar-color">
                                    {t('simulator')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/realCase" className="nav-link fw-medium custom-navbar-color">
                                    {t('realCases')}
                                </Link>
                            </li>
                        </ul>
                        <div className="language-switcher">
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`language-btn ${i18n.language?.startsWith('en') ? 'active' : ''}`}
                            >
                                EN
                            </button>
                            <span className="mx-1">|</span>
                            <button
                                onClick={() => changeLanguage('es')}
                                className={`language-btn ${i18n.language?.startsWith('es') ? 'active' : ''}`}
                            >
                                ES
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}