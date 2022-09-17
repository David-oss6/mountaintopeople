import "./App.css";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="appContainer">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
