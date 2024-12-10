import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [meds, setMeds] = useState<MedType[]>([]);

  type MedType = {
    _id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    stock: number;
    expirationDate: string;
    category: string;
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/medicines")
      .then((meds) => setMeds(meds.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {meds.map((med) => (
            <tr key={med._id}>
              <td>{med.name}</td>
              <td>{med.brand}</td>
              <td>{med.stock}</td>
              <td>{med.price}</td>
              <td>{med.category}</td>
              <td>{med.description}</td>
              <td>{med.expirationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
