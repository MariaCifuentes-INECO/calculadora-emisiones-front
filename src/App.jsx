import GlobalRouter from "./routes/GlobalRouter.jsx";
import {CalculatorContext} from "./context/CalculatorContext";
import {useCompleteNetwork} from "./hooks/useCompleteNetwork.jsx";


function App() {
    const [completeNetwork, setCompleteNetwork] = useCompleteNetwork();


    return (
        <CalculatorContext.Provider value={{completeNetwork, setCompleteNetwork}}>
            <GlobalRouter></GlobalRouter>
        </CalculatorContext.Provider>
    );
}

export default App;