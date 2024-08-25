import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";

import Header from "./components/Header";
import EnHeader from "./components/EnHeader.jsx";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import EnFooter from "./components/EnFooter";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import VideosPage from "./pages/VideosPage";
import FAQPage from "./pages/FAQPage";
import EmpleoPage from "./pages/EmpleoPage";
import ContactPage from "./pages/ContactPage";
import ContactPageEN from "./pages/ContactPageEN";
import EnvioPage from "./pages/FooterPages/EnvioPage";
import PaymentPage from "./pages/FooterPages/PaymentPage";
import MapPage from "./pages/FooterPages/MapPage";
import ExportPage from "./pages/ExportPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (
      window.HSStaticMethods &&
      typeof window.HSStaticMethods.autoInit === "function"
    ) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  const englishPages = ["/export", "/contactEN"];
  const isEnglishPage = englishPages.some((page) =>
    location.pathname.startsWith(page)
  );

  return (
    <>
      {isEnglishPage ? <EnHeader /> : <Header />}
      <main>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/empleo" element={<EmpleoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contactEN" element={<ContactPageEN />} />
            <Route path="/envio" element={<EnvioPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/details/:id" element={<ProductDetailPage />} />
          </Routes>
        </div>
      </main>
      {isEnglishPage ? <EnFooter /> : <Footer />}
    </>
  );
}

export default App;
