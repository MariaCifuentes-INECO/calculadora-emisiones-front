import GlobalRouter from "./routes/GlobalRouter.jsx";
import {CalculatorContext} from "./context/CalculatorContext";
import {useCompleteNetwork} from "./hooks/useCompleteNetwork.jsx";
import {useCorridors} from "./hooks/useCorridors.jsx";


function App() {
    const [completeNetwork, setCompleteNetwork] = useCompleteNetwork();
    const [corridors, setCorridors] = useCorridors();


    return (
        <CalculatorContext.Provider value={{completeNetwork, setCompleteNetwork, corridors, setCorridors}}>
            <GlobalRouter></GlobalRouter>
        </CalculatorContext.Provider>
    );
}

export default App;