import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="md:hidden">
        <SearchBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
