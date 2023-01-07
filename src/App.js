import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ContactApp from "./container/ContactApp";
import { Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Layout from "./Layout/Layout";
import Header from "./components/Header";
import ContactDetail from "./components/ContactDetail";
import ContactEdit from "./components/ContactEdit";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/contact/*" element={<ContactApp />} />
        <Route path="/header/*" to={<Header />}>
          <Route path="new-contact" element={<FormComponent />} />
          <Route path="detail-contact/:id" element={<ContactDetail />} />
          <Route path="edit-contact/:id" element={<ContactEdit />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
