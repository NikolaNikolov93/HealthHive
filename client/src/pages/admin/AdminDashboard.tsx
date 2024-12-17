// src/components/AdminDashboard.tsx
import { useState } from "react";
import useMedicines from "../../hooks/useMedicines";
import { MedType } from "../../types/types";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Heading,
  SearchBar,
  SearchInput,
  ToggleButtonsContainer,
} from "./AdminDashboard.styles"; // Importing styled components

const AdminDashboard = () => {
  const [view, setView] = useState<"users" | "medicines" | null>(null);

  const { data: medicines, isLoading, error } = useMedicines();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter medicines based on the search term
  const filteredMedicines = medicines?.filter((medicine: MedType) =>
    medicine.name.toLowerCase().includes(searchTerm)
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Heading>Medicines</Heading>

      {/* Search Bar */}
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search medicine by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBar>
      <ToggleButtonsContainer>
        <Button onClick={() => setView("users")}>Users</Button>
        <Button onClick={() => setView("medicines")}>Medicines</Button>
      </ToggleButtonsContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Brand</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Expiration Date</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMedicines?.map((medicine: MedType) => (
            <TableRow key={medicine._id}>
              <TableCell>{medicine.name}</TableCell>
              <TableCell>{medicine.brand}</TableCell>
              <TableCell>{medicine.description}</TableCell>
              <TableCell>${medicine.price}</TableCell>
              <TableCell>{medicine.stock}</TableCell>
              <TableCell>
                {new Date(medicine.expirationDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{medicine.category}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(medicine._id)}>
                  Update
                </Button>
                <Button onClick={() => handleDelete(medicine._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  // Mock functions to handle Update and Delete
  function handleUpdate(id: string) {
    console.log(`Update medicine with ID: ${id}`);
    // Navigate to an update form or show a modal to update
  }

  function handleDelete(id: string) {
    console.log(`Delete medicine with ID: ${id}`);
    // Call a service or function to delete the medicine
  }
};

export default AdminDashboard;
