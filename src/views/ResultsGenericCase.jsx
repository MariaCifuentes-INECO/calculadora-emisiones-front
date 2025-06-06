import {Link, useLocation} from 'react-router-dom';
import '../styles/resultsGenericCaseStyle.css';
import GraficoGEISistema from "../components/GraficoGEISistema.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import viajeros from "../assets/viajeros.svg"
import avion from "../assets/avion.svg"
import torre from "../assets/torre.svg"
import mapa from "../assets/mapa.svg"
import vias from "../assets/vias.svg"
import {Trans, useTranslation} from "react-i18next";


// Componente principal
const ResultsGenericCase = () => {
    const location = useLocation();
    const {data} = location.state || {};
    const {t} = useTranslation('resultsGenericCase');
    const { i18n } = useTranslation();

    const formatNumber = (number) => {
        return new Intl.NumberFormat(i18n.language).format(number);
    };

    // Validar que los datos estén presentes y tengan el formato correcto
    if (!data || !data.cicloVidaAVEAcumulado || !data.cicloVidaAereoAcumulado || !data.cicloVidaTodoAereoAcumulado || !data.sumaFerroviarioAereoAcumulado) {
        return <div>No hay datos válidos para mostrar.</div>;
    }

    const traducirTerreno = (terreno) => {
        // Si el idioma es inglés, se hace la traducción al inglés
        if (i18n.language === 'en') {
            const traducciones = {
                "Llano": "Flat",
                "Accidentado": "Rough",
                "Medio": "Medium",
            };
            return traducciones[terreno] || terreno;
        }
        // Si no es inglés, devuelve el tamaño tal cual (en español por defecto)
        return terreno;
    };

    const traducirTamano = (tamano) => {
        // Si el idioma es inglés, se hace la traducción al inglés
        if (i18n.language === 'en') {
            const traducciones = {
                "Grande": "Large",
                "Pequeño": "Small",
                "Mediano": "Medium",
            };
            return traducciones[tamano] || tamano;
        }
        // Si no es inglés, devuelve el tamaño tal cual (en español por defecto)
        return tamano;
    };

    const breadcrumbItems = [
        {label: t('breadcrumb.home'), link: "/", className: "home"},
        {label: t('breadcrumb.simulator'), link: "/genericCase", className: "intermediate"},
        {label: t('breadcrumb.current'), active: true, className: "current"},
    ];

    return (
        <div className="container resultsenericCaseWrapper">
            {/* Miga de pan */}
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container resultsGenericCaseCont">
                <h1 className="title-resultsGenericCase">{t('title')}</h1>
                <section className="mt-5 mb-5 resultsGenericCaseExplanation">
                    <p>
                        <Trans
                            i18nKey="resultsGenericCase:paragraphs.p1"
                            components={{
                                strong: <strong/>,
                            }}
                            values={{distancia: data.distancia}}
                        />
                    </p>
                </section>
                <div className="hypothesisSummary mb-3">
                    <h2 className="hypothesisTitle">
                        <Trans
                            i18nKey="resultsGenericCase:assumptions.title"
                            components={{ span: <span className="res-tex-dest" /> }}
                        />
                    </h2>
                    <div className="hypothesisGrid">
                        <div className="hypothesisItem">
                            <img src={viajeros} alt="Viajeros" className="hypothesisIcon"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:assumptions.travelers"
                                    components={{
                                        span1: <span className="texto-destacado bloque" />,
                                        span2:  <span className="bloque" />,
                                        span3: <span className="texto-destacado bloque" />
                                    }}
                                    values={{
                                        demandaInicial: formatNumber(data.demandaInicial),
                                        crecimientoAnual: formatNumber(data.crecimientoAnual)
                                    }}
                                />
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={avion} alt="Aéreo" className="hypothesisIcon"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:assumptions.demand"
                                    components={{
                                        span1: <span className="texto-destacado bloque" />,
                                        span2:  <span className="bloque" />,
                                    }}
                                    values={{
                                        modoAereo: formatNumber(data.modoAereo),
                                    }}
                                />
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={torre} alt="Aeropuerto" className="hypothesisIcon"
                                 style={{height: "50px", width: "30px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:assumptions.airports"
                                    components={{
                                        span1: <span className="bloque"/>,
                                        span2: <span className="texto-destacado bloque"/>,
                                        span3: <span className="bloque"/>,
                                        span4: <span className="texto-destacado bloque"/>,
                                        span5: <span className="bloque"/>,
                                    }}
                                    values={{
                                        aeropuertoA: traducirTamano(data.aeropuertoA).toLowerCase(),
                                        aeropuertoB: traducirTamano(data.aeropuertoB).toLowerCase(),
                                    }}
                                />
                            </p>
                        </div>
                        <div className="hypothesisItem">
                            <img src={mapa} alt="Mapa" className="hypothesisIcon"
                                 style={{height: "50px", width: "53px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:assumptions.terrain"
                                    components={{
                                        span1: <span className="bloque"/>,
                                        span2: <span className="texto-destacado bloque"/>,
                                        span3: <span className="bloque"/>,
                                    }}
                                    values={{
                                        tipoTerreno: traducirTerreno(data.tipoTerreno).toLowerCase(),
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="emisiones-container mb-3">
                    <div className="seccion-emisiones">
                        {/* Primera sección */}
                        <div className="bloque-emisiones">
                            <h2 className="titulo-emisiones">
                                <Trans
                                    i18nKey="resultsGenericCase:construction.title"
                                    components={{ span: <span className="res-tex-dest" /> }}
                                />
                            </h2>
                            <div className="fila-emisiones">
                                <div className="emision-item">
                                    <img src={avion} alt="Aéreo" className="icono-emision"
                                         style={{height: "50px", width: "50px"}}/>
                                    <p>
                                        <Trans
                                            i18nKey="resultsGenericCase:construction.air"
                                            components={{
                                                span1: <span className="texto-destacado bloque"/>,
                                                span2: <span className="bloque"/>,
                                                span3: <span className="bloque"/>,
                                                sub: <sub />
                                            }}
                                            values={{
                                                emisionesConstAereo: formatNumber(data.emisionesConstAereo),
                                            }}
                                        />
                                    </p>
                                </div>
                                <div className="emision-item">
                                    <img src={vias} alt="vias" className="icono-emision"
                                         style={{height: "50px", width: "49px"}}/>
                                    <p>
                                        <Trans
                                            i18nKey="resultsGenericCase:construction.rail"
                                            components={{
                                                span1: <span className="texto-destacado bloque"/>,
                                                span2: <span className="bloque"/>,
                                                span3: <span className="bloque"/>,
                                                sub: <sub />
                                            }}
                                            values={{
                                                emisionesConstAve: formatNumber(data.emisionesConstAve),
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Segunda sección */}
                        <div className="bloque-emisiones">
                            <h2 className="titulo-emisiones">
                                <Trans
                                    i18nKey="resultsGenericCase:totalEmissions.title"
                                    components={{ span: <span className="res-tex-dest" /> }}
                                />
                            </h2>
                            <div className="fila-emisiones">
                                <div className="emision-item">
                                    <img src={avion} alt="Aéreo" className="icono-emision"
                                         style={{height: "50px", width: "50px"}}/>
                                    <p>
                                        <Trans
                                            i18nKey="resultsGenericCase:totalEmissions.air"
                                            components={{
                                                span1: <span className="texto-destacado bloque"/>,
                                                span2: <span className="bloque"/>,
                                                span3: <span className="bloque"/>,
                                                sub: <sub />
                                            }}
                                            values={{
                                                cicloVidaAereoAcumulado: formatNumber(data.cicloVidaAereoAcumulado.at(-1)),
                                            }}
                                        />
                                    </p>
                                </div>
                                <div className="emision-item">
                                    <img src={vias} alt="vias" className="icono-emision"
                                         style={{height: "50px", width: "49px"}}/>
                                    <p>
                                        <Trans
                                            i18nKey="resultsGenericCase:totalEmissions.rail"
                                            components={{
                                                span1: <span className="texto-destacado bloque"/>,
                                                span2: <span className="bloque"/>,
                                                span3: <span className="bloque"/>,
                                                sub: <sub />
                                            }}
                                            values={{
                                                cicloVidaAVEAcumulado: formatNumber(data.cicloVidaAVEAcumulado.at(-1)),
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloque-demanda mb-3">
                    <h2 className="titulo-demanda">
                        <Trans
                            i18nKey="resultsGenericCase:transported.title"
                            components={{ span: <span className="res-tex-dest" /> }}
                        />
                    </h2>
                    <div className="fila-emisiones">
                        <div className="demanda-item">
                            <img src={avion} alt="Aéreo" className="icono-demanda"
                                 style={{height: "50px", width: "50px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:transported.air"
                                    components={{
                                        span1: <span className="texto-destacado bloque"/>,
                                        span2: <span className="bloque"/>,
                                    }}
                                    values={{
                                        demandaAvionAcumulado: formatNumber(data.demandaAvionAcumulado.at(-1)),
                                    }}
                                />
                            </p>
                        </div>
                        <div className="demanda-item">
                            <img src={vias} alt="vias" className="icono-demanda"
                                 style={{height: "50px", width: "49px"}}/>
                            <p>
                                <Trans
                                    i18nKey="resultsGenericCase:transported.rail"
                                    components={{
                                        span1: <span className="texto-destacado bloque"/>,
                                        span2: <span className="bloque"/>,
                                    }}
                                    values={{
                                        demandaTrenAcumulado: formatNumber(data.demandaTrenAcumulado.at(-1)),
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <section className="resultsGenericCaseExplanation mb-3">
                    <p>
                        {t('paragraphs.p2')}
                    </p>
                    <p>
                        <Trans
                            i18nKey="resultsGenericCase:paragraphs.p3"
                            components={{ strong: <strong /> }}
                            values={{ umbralEficiencia: formatNumber(data.umbralEficiencia)}}
                        />
                    </p>
                    <p className="mb-4 text-justify">
                        {t('paragraphs.p4')}
                    </p>
                    <div>
                        <GraficoGEISistema data={data}/>
                    </div>
                </section>
                <div className="resultsGenericCaseExplanation mt-5">
                    <Link to="/hypotheses" className="presentation-custom-link">{t('links.hypotheses')}</Link>
                </div>
            </div>
        </div>
    );
};

export default ResultsGenericCase;