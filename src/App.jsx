import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-orange-600 text-center">
        Currency Converter App
      </h1>
      <InputBox />
    </>
  );
}

export default App;
