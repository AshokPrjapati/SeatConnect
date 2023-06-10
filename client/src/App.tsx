import axios from "axios";
import Routes from "./routes/Routes";

// Set the default base URL for axios requests
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;