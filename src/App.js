import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ContactApp from "./container/ContactApp";
import { Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/contact/*" element={<ContactApp />}>
          <Route path="new-contact" element={<FormComponent />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
