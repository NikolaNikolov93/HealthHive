import {
  AdminFrom,
  AdmingFormWrapper,
  AdmingPageContainer,
} from "./Admin.styles";

const Admin = () => {
  return (
    <AdmingPageContainer>
      <AdmingFormWrapper>
        <h2>Admin Login</h2>
        <AdminFrom>
          <div>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
        </AdminFrom>
      </AdmingFormWrapper>
    </AdmingPageContainer>
  );
};

export default Admin;
