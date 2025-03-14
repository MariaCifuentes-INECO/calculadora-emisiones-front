import { Link } from "react-router-dom";
import vias from "../assets/vias.svg";
import "../styles/optionsRealCaseStyle.css";

export default function OptionsRealCase({ title, linkTo }) {
    return (
        <Link to={linkTo} className="custom-link">
            <div className="optionsCont">
                <div className="flex"> {/* items-start para alinear la imagen y el texto en la parte superior */}
                    <img
                        src={vias}
                        alt="Icono red completa"
                        style={{ height: "48px", width: "48px", flexShrink: 0 }} /* Evita que la imagen se reduzca */
                    />
                    <span className="optionsText self-center">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}