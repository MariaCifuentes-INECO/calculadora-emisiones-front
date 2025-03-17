import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../components/Layout.jsx"; // Importa el Layout
import Presentation from "../views/Presentation.jsx";
import GenericCase from "../views/GenericCase.jsx";
import ResultsGenericCase from "../views/ResultsGenericCase.jsx";
import RealCase from "../views/RealCase.jsx";
import ResultsCompleteNetwork from "../views/ResultsCompleteNetwork.jsx";
import { ExcelUploader } from "../views/ExcelUploader.jsx";
import Hypothesis from "../views/Hypothesis.jsx";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta padre que usa el Layout */}
                <Route element={<Layout />}>
                    {/* Rutas hijas que se renderizan dentro del Layout */}
                    <Route path="/" element={<Presentation />} />
                    <Route path="/genericCase" element={<GenericCase />} />
                    <Route path="/resultsGenericCase" element={<ResultsGenericCase />} />
                    <Route path="/realCase" element={<RealCase />} />
                    <Route path="/completeNetwork" element={<ResultsCompleteNetwork />} />
                    <Route path="/excelUploader" element={<ExcelUploader />} />
                    <Route path="/hypothesis" element={<Hypothesis />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;