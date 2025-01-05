// src/components/AdminDashboard.tsx
import { useState } from "react";
import {
  Heading,
  SearchBar,
  SearchInput,
  ToggleButtonsContainer,
} from "./AdminDashboard.styles"; // Importing styled components
import MedicinesTable from "./tables/MedicinesTable";
import UsersTable from "./tables/UsersTable";
import Modal from "../../components/modal/Modal";
import AddMedicine from "./adminForms/AddMedicine";

const AdminDashboard = () => {
  const [view, setView] = useState<"users" | "medicines">("medicines");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Heading>Medicines</Heading>

      {/* Search Bar */}
      <SearchBar>
        <SearchInput
          type="text"
          placeholder={
            view === "medicines"
              ? "Search medicine by name..."
              : "Search user by name..."
          }
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBar>
      <ToggleButtonsContainer>
        <button onClick={() => setView("users")}>Users</button>
        <button onClick={() => setView("medicines")}>Medicines</button>
        <button onClick={() => setIsModalOpen(true)}>Add Medicine</button>
      </ToggleButtonsContainer>
      {view === "medicines" ? (
        <MedicinesTable searchTerm={searchTerm} />
      ) : view === "users" ? (
        <UsersTable searchTerm={searchTerm} />
      ) : (
        <h1>Error</h1>
      )}
      {isModalOpen && (
        <Modal title="Add Medicine" onClose={() => setIsModalOpen(false)}>
          <AddMedicine />
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
