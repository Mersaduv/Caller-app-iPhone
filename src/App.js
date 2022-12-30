import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import routs from "./routes";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Layout>
      <Routes>
        {routs.map((rout,index) => (
          <Route key={index} element={rout.element} path={rout.path} />
        ))}
      </Routes>\
      
    </Layout>
  );
}

export default App;
