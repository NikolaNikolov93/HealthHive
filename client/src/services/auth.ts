// Modified login function
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is ok, else throw an error with the response message
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error === "User not found") {
        throw new Error("Няма регистриран потребител с този имейл");
      } else if (errorData.error === "Invalid credentials") {
        throw new Error("Грешен имейл или парола");
      } else {
        throw new Error("Грешка при влизането");
      }
    }

    // Return the response data if login is successful
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { error: error.message }; // Return error message
  }
};
// Modified login function
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    // Check if the response is ok, else throw an error with the response message
    //Fix errir response
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error === "User already exists") {
        throw new Error("Има регистриран потребител с този имейл!");
      } else {
        throw new Error("Грешка при регистрирането");
      }
    }

    // Return the response data if login is successful
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { error: error.message }; // Return error message
  }
};

export const logout = async () => {
  try {
    const response = await fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      credentials: "include", // Include cookies in the request
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Грешка при излизането");
    }
    return { message: "Logout successful" }; // Return success message
  } catch (error: any) {
    throw new Error(error.message || "Грешка при излизането");
  }
};

export const loginAdmin = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:5000/auth/admin/login", {
      method: "POST", // Request method
      credentials: "include", // Ensure cookies are sent with the request
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify({ email, password }), // Send email and password in request body
    });

    if (!response.ok) {
      const data = await response.json(); // Parse the response as JSON
      throw new Error(data.error || "Login failed"); // Handle login failure
    }
    const adminData = await response.json();

    // Check if the role is admin, if not, throw an error
    if (adminData.role !== "admin") {
      throw new Error("Admins only"); // If role is not admin, show error
    } else {
      return adminData;
    }
  } catch (error: any) {
    return { error: error.message };
  }
};
