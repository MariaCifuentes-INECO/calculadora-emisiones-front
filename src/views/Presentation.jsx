import {Link, useNavigate} from "react-router-dom"
import logo from "../assets/logo_presentacion.svg"
import "../styles/presentationStyle.css"

const Presentation = () => {
    const navigate = useNavigate()

    const handleGenericCase = () => {
        navigate("/genericCase") // Navega a la vista GenericCase
    }

    const handleRealExample = () => {
        navigate("/realCase") // Navega a la vista RealCase
    }

    return (
        <div className="flex-container presentationCont">

            {/* Sección superior con logo y fondo azul */}
            <div className="container presentation-header mt-5">
                <img src={logo} alt="CarbonTrack360 Logo" className="logo-img mt-4"/>
                <h1 className="presentation-title mt-5 mb-4">
                    LIFECYCLE EMISSIONS CALCULATOR FOR TRANSPORT INFRASTRUCTURES
                </h1>
            </div>
            <div className="container presentation-exp">
                <section>
                    <p>
                        <strong>What is the actual impact of transport on climate change?</strong><br/>
                        Air transport faces the challenge of reducing its greenhouse gas (GHG) emissions, but is it
                        really the major contributor? To put things into perspective, this calculator analyzes the entire
                        lifecycle of transport infrastructures, comparing the emissions of air transport and high-speed rail.
                    </p>
                    <p>
                        <strong>Explore, compare, and draw your own conclusions.</strong>
                    </p>
                    <p>
                        (<strong>Note:</strong> The analysis excludes road transport, despite its operation accounting
                        for a high percentage (30.1%) of emissions in Spain, as its infrastructure has other uses).
                    </p>
                    <p>
                        Check the <strong>methodology and sources</strong> used <Link to="/hypothesis"
                                                                                      className="presentation-custom-link">here</Link>.
                    </p>
                </section>
                <section className="text-center mt-5">
                    <h2 className="presentation-subtitle mb-4">Would you like to analyze a simulation or a real
                        case?</h2>
                    <div className="d-flex gap-5 justify-content-center">
                        <button onClick={handleGenericCase} className="btn btn-presentation">
                            SIMULATION
                        </button>
                        <button onClick={handleRealExample} className="btn btn-presentation">
                            REAL CASE
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Presentation

