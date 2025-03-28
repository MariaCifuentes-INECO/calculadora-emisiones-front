import { Link } from "react-router-dom"
import vias from "../assets/vias.svg"
import "../styles/optionsRealCaseStyle.css"

export default function OptionsRealCase({ title, linkTo }) {
    return (
        <div className="option-card-container">
            <Link to={linkTo} className="custom-link w-100">
                <div className="optionsCont">
                    <div className="flex">
                        <img src={vias} alt="Icono red completa" className="vias-casosReales" />
                        <span className="optionsText">{title}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

