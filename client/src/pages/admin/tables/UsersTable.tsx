import useUsers from "../../../hooks/useUsers";
import { UserType } from "../../../types/types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./Table.styles";
type UsersTableProps = {
  searchTerm: string;
};

const UsersTable: React.FC<UsersTableProps> = ({ searchTerm }) => {
  const { data: users, isLoading, error } = useUsers();
  const filteredUsers = users?.filter((user: UserType) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredUsers?.map((user: UserType) => (
          <TableRow key={user._id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>${user.address?.phone}</TableCell>

            <TableCell>
              <Button onClick={() => handleUpdate(user._id)}>Update</Button>
              <Button onClick={() => handleDelete(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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

export default UsersTable;
