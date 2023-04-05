import Assembler from "./Assembler";
import ThemeState from "../src/context/Theme/ThemeState";

function App() {
  return (
    <div className="App">
      <ThemeState>
        <Assembler />
      </ThemeState>
    </div>
  );
}

export default App;
