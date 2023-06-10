import axios from "axios";

// Set the default base URL for axios requests
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <>
      <h1>Don</h1>
    </>
  );
}

export default App;