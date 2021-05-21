import Header from "./components/Header/Header.component";
import LandingMessage from "./components/LandingMessage/LandingMessage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="landingMessage">
        <LandingMessage />
      </div>
      <div className="content">content</div>
    </div>
  );
}

export default App;
