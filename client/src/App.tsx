import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import { Main } from "./App.styles";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
