import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}
