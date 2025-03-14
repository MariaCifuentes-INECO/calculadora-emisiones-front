import logoIneco from "../assets/logoIneco.svg"
import "../styles/footerStyle.css"

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container-fluid border-top footer-container">
                    <div className="col-md-4 d-flex flex-column align-items-start">
                        <img
                            src={logoIneco}
                            alt="INECO Logo"
                            className="img-fluid"
                            style={{height: "41.28px", width: "191.15px"}}
                        />
                        <span className="mt-2 crText">Copyright © 2025</span>
                    </div>
            </div>

        </footer>
    )
}

