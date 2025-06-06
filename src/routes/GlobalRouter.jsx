import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from "../components/Layout.jsx"; // Importa el Layout
import Presentation from "../views/Presentation.jsx";
import GenericCase from "../views/GenericCase.jsx";
import ResultsGenericCase from "../views/ResultsGenericCase.jsx";
import RealCase from "../views/RealCase.jsx";
import ResultsCompleteNetwork from "../views/ResultsCompleteNetwork.jsx";
import { ExcelUploader } from "../views/ExcelUploader.jsx";
import Hypotheses from "../views/Hypotheses.jsx";
import ResultsCorridorMAD_BCN from "../views/ResultsCorridorMAD_BCN.jsx";
import ResultsCorridorMAD_SEV from "../views/ResultsCorridorMAD_SEV.jsx";
import ResultsCorridorMAD_LEV from "../views/ResultsCorridorMAD_LEV.jsx";
import {ScrollToTop} from "../components/ScrollToTop.jsx";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Ruta padre que usa el Layout */}
                <Route element={<Layout />}>
                    {/* Rutas hijas que se renderizan dentro del Layout */}
                    <Route path="/" element={<Presentation />} />
                    <Route path="/genericCase" element={<GenericCase />} />
                    <Route path="/resultsGenericCase" element={<ResultsGenericCase />} />
                    <Route path="/realCase" element={<RealCase />} />
                    <Route path="/completeNetwork" element={<ResultsCompleteNetwork />} />
                    <Route path="/corridorMADBCN" element={<ResultsCorridorMAD_BCN />} />
                    <Route path="/corridorMADSEV" element={<ResultsCorridorMAD_SEV />} />
                    <Route path="/corridorMADLEV" element={<ResultsCorridorMAD_LEV />} />
                    <Route path="/excelUploader" element={<ExcelUploader />} />
                    <Route path="/hypotheses" element={<Hypotheses />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;