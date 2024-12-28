import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import { Main } from "./App.styles";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import store from "./store";
import LoginFormComponent from "./components/form/loginForm/LoginForm";
import RegisterFormComponent from "./components/form/registerForm/RegisterForm";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginFormComponent />} />
            <Route path="/register" element={<RegisterFormComponent />} />
          </Routes>
        </Main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
