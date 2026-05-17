import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}