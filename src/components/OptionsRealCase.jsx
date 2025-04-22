import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import vias from "../assets/vias.svg";
import "../styles/optionsRealCaseStyle.css";

export default function OptionsRealCase({ title, linkTo }) {
    const textRef = useRef(null);
    const [isSingleLine, setIsSingleLine] = useState(true);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
            const lines = el.offsetHeight / lineHeight;
            setIsSingleLine(lines <= 1);
        }
    }, [title]);

    return (
        <div className="option-card-container">
            <Link to={linkTo} className="custom-link w-100">
                <div className="optionsCont">
                    <div className="flex">
                        <img src={vias} alt="Icono red completa" className="vias-casosReales" />
                        <span
                            ref={textRef}
                            className={`optionsText ${isSingleLine ? "center-text" : ""}`}
                        >
                            {title}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
