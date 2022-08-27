import { OperationsProvider } from "./Context/Operations"
import { StylesProvider } from "./Context/Styles";

import Home from "./Pages/Home";

import "./app.css"

function App() {

  return (
    <OperationsProvider>
      <StylesProvider>
        <Home />
       </StylesProvider>
    </OperationsProvider>
  );
}

export default App;
