import CurrencyConverter from "./components/CurrencyConverter";
import Newsfeed from "./components/Newsfeed";

const App = () => {
    return (
        <div className="app">
            <h1 className="title">Crypto-XCHG</h1>
            <div className="wrapper">
                <CurrencyConverter />
                <Newsfeed />
            </div>
        </div>
  );
};

export default App;
