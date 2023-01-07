import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className=" shadow-md h-screen max-w-md mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
