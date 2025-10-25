import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./index.css";
import "./scroll.css";
import "./general.css";

const App = () => {
  return (
    <TooltipProvider>
      <div className="h-screen w-screen overflow-hidden bg-[#131313] text-white">
        <BrowserRouter>
          {/* Navbar appears on all routes */}
          <Navbar />

          {/* Route-specific pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes below if needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  );
};

export default App;
