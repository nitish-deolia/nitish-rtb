import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import BmiCalculator from "./BmiCalculator";
import ShoppingList from "./ShoppingList";
import ImageCarousel from "./ImageCarousel";
import ProfileCard from "./ProfileCard";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/image-carousel" element={<ImageCarousel />} />
          <Route path="/profile-card" element={<ProfileCard />} />
        </Routes>
      </div>
    </Router>
  );
}