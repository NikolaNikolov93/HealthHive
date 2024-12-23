import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import { Main } from "./App.styles";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LoginRegisterForm from "./components/form/LoginRegisterForm";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegisterForm />} />
          <Route path="/register" element={<LoginRegisterForm />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
