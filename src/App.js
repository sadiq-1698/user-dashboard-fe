import "./App.css";
import "./App.scss";

import Routes from "./routes/Routes";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
