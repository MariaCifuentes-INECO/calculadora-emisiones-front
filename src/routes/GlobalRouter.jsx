import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentation from "../views/Presentation.jsx";
import GenericCase from "../views/GenericCase.jsx";
import ResultsGenericCase from "../views/ResultsGenericCase.jsx";


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Presentation />} />
                <Route path="/genericCase" element={<GenericCase />} />
                <Route path="/resultsGenericCase" element={<ResultsGenericCase />} />
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;