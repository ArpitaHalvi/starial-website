import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const isLoggedIn = !!token;
  const authorizationToken = `Bearer ${token}`;
  // Sync token state with localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    // console.log("Token: ", storedToken);
    if (storedToken) {
      setToken(storedToken);
      userAuthentication(storedToken);
    } else {
      setLoading(false); // set loeading to false if no token exists
    }
    //Cleanup function
    return () => {
      setUser(null);
      setLoading(false);
    };
  }, []);
  // Store the token in the local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  // Logout the user by removing the token
  const logoutUser = () => {
    setToken("");
    setUser(null);
    return localStorage.removeItem("token");
  };

  // JWT Authentication - to get the currently logged in user data
  const userAuthentication = async (authToken) => {
    // console.log("AuthToken: ", authToken);
    try {
      const response = await fetch("http://localhost:5002/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("Successfully fetched the user Data: ", data.userData);
        setUser(data.userData);
        setLoading(false);
      } else {
        console.error("Invalid token, logging out user.");
        logoutUser();
        setLoading(false);
        toast.error("Authentication failed, please log in again.");
      }
    } catch (e) {
      console.error("Error while fetching the user data!", e);
      logoutUser();
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        user,
        loading,
        authorizationToken,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth is used outside of the Provider.");
  }
  return authContextValue;
};
