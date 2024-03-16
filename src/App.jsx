import "./App.css";
import NavBar from "./Components/NavBar";
import ContactBar from "./Components/ContactBar";
import Home from "./Sections/Home";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <main className="main">
        <NavBar />
        <div className="app_section_container">
          <Home />
          <Footer />
        </div>
        <ContactBar />
      </main>
    </>
  );
}
