import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Admin from "./pages/admin/Admin";
import { Main } from "./App.styles";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
