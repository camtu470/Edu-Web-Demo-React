import "./App.css";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/register";
import AboutUsPage from "./pages/about-us";
import ContactPage from "./pages/contact";
import CoursesPage from "./pages/shop";
import CourseDetail from "././components/features/courses/[id]/index";
import TeacherPage from "./pages/teacher";

function App() {
  return (
    <BrowserRouter>
      <div className="font-oswald flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/teacher" element={<TeacherPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
