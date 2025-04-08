import { useTranslation } from 'react-i18next';
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
                        <strong>{t('sections.impact_question')}</strong><br/>
                        {t('sections.impact_description')}
                    </p>
                    <p>
                        <strong>{t('sections.explore')}</strong>
                    </p>
                    <p>
                        (<strong>{t('sections.note_title')}</strong>{t('sections.note')}).
                    </p>
                    <p>
                        {t('sections.methodology_1')}
                        <strong>{t('sections.methodology_bold')}</strong>
                        {t('sections.methodology_2')}
                            <Link to="/hypotheses" className="presentation-custom-link">
                        {t('sections.here')}
                    </Link>.
                    </p>
                </section>
                <section className="text-center mt-5">
                    <h2 className="presentation-subtitle mb-4">
                        {t('sections.choose_analysis')}
                    </h2>
                    <div className="d-flex gap-5 justify-content-center">
                        <button onClick={handleGenericCase} className="btn btn-presentation">
                            {t('sections.buttons.simulation')}
                        </button>
                        <button onClick={handleRealExample} className="btn btn-presentation">
                            {t('sections.buttons.real_case')}
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Presentation;