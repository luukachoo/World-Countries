import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import NavBar from "./components/NavBar";

const App = () => {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    console.log('Yes')
  }
  return (
    <BrowserRouter>
    <main className="bg-[#fafafa] min-h-[100vh] text-[#111517] dark:bg-[#202c37] dark:text-white">
      <NavBar toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
};

export default App;