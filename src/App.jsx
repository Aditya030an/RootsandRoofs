import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Navbar = lazy(() => import("./Component/navbar.jsx"));
const Home = lazy(() => import("./Component/Home.jsx"));
const Scroll = lazy(() => import("./Component/Scroll.jsx"));
const FAQ = lazy(() => import("./Component/FAQ.jsx"));
const Services = lazy(() => import("./Component/Services.jsx"));
const Footer = lazy(() => import("./Component/Footer.jsx"));
const RentalProperties = lazy(() => import("./Component/RentalProperties.jsx"));
const About = lazy(() => import("./Component/About.jsx"));
const Contact = lazy(() => import("./Component/Contact.jsx"));
const Onestop = lazy(() => import("./Component/Onestop.jsx"));
const Careerpage = lazy(() => import("./Component/Careerpage.jsx"));
const ScrollToTopButton = lazy(() =>
  import("./Component/ScrollToTopButton.jsx")
);
const WhatsAppButton = lazy(() => import("./Component/WhatsAppButton.jsx"));

/* ------------------ Custom Loader Component ------------------ */
const Loader = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center backdrop-blur-sm bg-white/30 z-[9999]">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-slate-700 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="w-3 h-3 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
      </div>
    </div>
  );
};

/* ------------------ App Component ------------------ */
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Scroll" element={<Scroll />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Properties" element={<RentalProperties />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/careerpage" element={<Careerpage />} />
            <Route path="/Onestop" element={<Onestop />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
