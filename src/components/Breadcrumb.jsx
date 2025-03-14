import { Link } from "react-router-dom";
import "../styles/breadcrumbStyle.css";

const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${item.active ? "current" : ""} ${item.className || ""}`}
                        aria-current={item.active ? "page" : undefined}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;