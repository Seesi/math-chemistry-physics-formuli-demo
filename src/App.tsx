import "./App.css";
import { MathJaxContext } from "better-react-mathjax";
import PhysicsTest from "./physics/PhysicsTest";

const config = {
  loader: { load: ["[tex]/mhchem"] },
  tex: {
    packages: { "[+]": ["mhchem"] },
  },
};

function App() {
  return (
    <div>
      <MathJaxContext version={3} config={config}>
        <h2>Physics Test</h2>
        <PhysicsTest />
      </MathJaxContext>
    </div>
  );
}

export default App;
