import { OperationsProvider } from "./Context/Operations"
import { StylesProvider } from "./Context/Styles";

import Home from "./Pages/Home";

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
