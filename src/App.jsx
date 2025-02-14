import GlobalRouter from "./routes/GlobalRouter.jsx";
import {CalculatorContext} from "./context/CalculatorContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/globalStyle.css"


function App() {
    return (
        <CalculatorContext.Provider value={{}}>
            <GlobalRouter></GlobalRouter>
        </CalculatorContext.Provider>
    );
}

export default App;