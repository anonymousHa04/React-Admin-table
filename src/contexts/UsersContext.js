import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/userService";

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const deleteUserById = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const editUser = (userId, updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user
      )
    );
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loading,
        deleteUserById,
        editUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
