import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
