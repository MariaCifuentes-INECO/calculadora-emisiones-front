import {Trans, useTranslation} from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo_presentacion.svg";
import "../styles/presentationStyle.css";

const Presentation = () => {
    const { t } = useTranslation('presentation');
    const navigate = useNavigate();

    const handleGenericCase = () => navigate("/genericCase");
    const handleRealExample = () => navigate("/realCase");

    return (
        <div className="flex-container presentationCont">
            {/* Sección superior con logo y fondo azul */}
            <div className="container presentation-header mt-5">
                <img src={logo} alt="CarbonTrack360 Logo" className="logo-img mt-4"/>
                <h1 className="presentation-title mt-5 mb-4">
                    {t('title')}
                </h1>
            </div>
            <div className="container presentation-exp">
                <section>
                    <p>
                        <Trans
                            i18nKey="presentation:paragraphs.p1"
                            components={{
                                strong: <strong/>,
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="presentation:paragraphs.p2"
                            components={{
                                strong: <strong/>,
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="presentation:paragraphs.p3"
                            components={{
                                strong: <strong/>,
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="presentation:paragraphs.p4"
                            components={{
                                strong: <strong />,
                                span: <Link to="/hypotheses" className="presentation-custom-link" />
                            }}
                        />
                    </p>
                </section>
                <section className="text-center mt-5">
                    <h2 className="presentation-subtitle mb-4">
                        {t('subtitle')}
                    </h2>
                    <div className="d-flex gap-5 justify-content-center">
                        <button onClick={handleGenericCase} className="btn btn-presentation">
                            {t('buttons.simulation')}
                        </button>
                        <button onClick={handleRealExample} className="btn btn-presentation">
                            {t('buttons.real_case')}
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Presentation;