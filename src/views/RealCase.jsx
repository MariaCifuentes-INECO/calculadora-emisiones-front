import "../styles/realCaseStyle.css"
import Breadcrumb from "../components/Breadcrumb.jsx";
import OptionsRealCase from "../components/OptionsRealCase.jsx";
import {Trans, useTranslation} from "react-i18next";
import FormattedListItem from "../components/FormattedListItem.jsx"


const RealCase = () => {

    const { t } = useTranslation('realCase');

    const breadcrumbItems = [
        { label: t('breadcrumb.home'), link: "/", className: "home" },
        { label: t('breadcrumb.realCase'), active: true, className: "current" },
    ];

    const corridorOptions = [
        { key: 0, linkTo: '/completeNetwork' },
        { key: 1, linkTo: '/corridorMADSEV' },
        { key: 2, linkTo: '/corridorMADBCN' },
        { key: 3, linkTo: '/corridorMADLEV' }
    ];

    return (
        <div className="container realCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container realCaseCont">
                <h1 className="title-realCase">{t('title')}</h1>
                <section className="mt-5 mb-5 realCaseExplanation">
                    <p>
                        <Trans
                            i18nKey="realCase:paragraphs.p1"
                            components={{
                                strong: <strong/>,
                                sub: <sub/>
                            }}
                        />
                    </p>
                    <p>{t('paragraphs.p2')}</p>
                    <p>{t('paragraphs.p3')}</p>

                    <ul>
                        {t('lists.option', {returnObjects: true}).map((item, index) => (
                            <FormattedListItem key={`option-${index}`} content={item} />
                        ))}
                    </ul>
                </section>

                <h2 className="mb-4 subtitleRealCase">{t('subtitle')}</h2>
                <section className="container">
                    <div className="row g-3 row-eq-height"> {/* g-4 añade espacio entre las columnas */}
                        {/* Primera fila: 4 elementos */}
                        {corridorOptions.map(({ key, linkTo }) => (
                            <div key={key} className="col-md-3 mb-3 d-flex">
                                <OptionsRealCase
                                    title={t(`lists.corridor.${key}`)}
                                    linkTo={linkTo}
                                    className={key !== 0 ? 'small-text' : ''}
                                />
                            </div>
                        ))}

                        {/*/!* Segunda fila: 2 elementos *!/*/}
                        {/*<div*/}
                        {/*    className="col-md-3 mb-3"> /!* col-md-6: 2 columnas por fila en pantallas medianas y grandes *!/*/}
                        {/*    <OptionsRealCase title="Corredor Madrid - Galicia" linkTo="/completeNetwork"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-3 mb-3">*/}
                        {/*    <OptionsRealCase title="Corredor Madrid - Lisboa" linkTo="/completeNetwork"/>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RealCase;