import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import ActiveSectionContextProvider from "./context/ActiveSectionContextProvider";
import ThemeContextProvider from "./context/ThemeContext";
import "./index.css";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    // -z-20 bg-[#E6EFFA]
    <div
      className="relative overflow-x-hidden pt-28
    font-simple text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          <Home />
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </div>
  );
}
