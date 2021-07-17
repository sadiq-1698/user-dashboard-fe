import "./App.css";
import "./App.scss";

import Routes from "./routes/Routes";
import { AuthProvider } from "./contexts/authContext";

function App() {
  console.log(process.env.REACT_APP_BASE_API_URL);
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
