const AddMedicine = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input id="brand" type="text" />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input id="description" type="text" />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input id="price" type="number" />
      </div>
      <div>
        <label htmlFor="stock">Stock:</label>
        <input id="stock" type="number" />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input id="expirationDate" type="date" />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input id="category" type="text" />
      </div>
    </form>
  );
};

export default AddMedicine;
